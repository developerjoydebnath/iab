import { Check, ChevronsUpDown, Eye, FilterX, Search, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../../components/ui/alert-dialog";
import { Button } from '../../components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../../components/ui/command';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Input } from '../../components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../../components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Skeleton } from '../../components/ui/skeleton';
import { Tabs, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { cn } from '../../components/ui/utils';
import api from '../../lib/axios';
import { useAuthStore } from '../../store/authStore';

const fetcher = (url: string) => api.get(url).then(res => res.data);

export function AdminUsers() {
  const { token } = useAuthStore();
  const [page, setPage] = useState(1);
  const [roleTab, setRoleTab] = useState('all');
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [divisionId, setDivisionId] = useState('');
  const [districtId, setDistrictId] = useState('');
  const [upazilaId, setUpazilaId] = useState('');
  const [unionId, setUnionId] = useState('');
  const [seatId, setSeatId] = useState('');
  const [seatOpen, setSeatOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [fullUserDetails, setFullUserDetails] = useState<any>(null);
  const [loadingDetails, setLoadingDetails] = useState(false);

  // Geo Data for filters
  const [divisions, setDivisions] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [upazilas, setUpazilas] = useState<any[]>([]);
  const [unions, setUnions] = useState<any[]>([]);
  const [seats, setSeats] = useState<any[]>([]);

  // Debounce Search
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 500);
    return () => clearTimeout(handler);
  }, [search]);

  // Build URL params
  const params = new URLSearchParams({
    page: page.toString(),
    role_filter: roleTab,
    ...(debouncedSearch && { search: debouncedSearch }),
    ...(divisionId && { division_id: divisionId }),
    ...(districtId && { district_id: districtId }),
    ...(upazilaId && { upazila_id: upazilaId }),
    ...(unionId && { union_id: unionId }),
    ...(seatId && { seat_id: seatId }),
  });

  // Fetch Users with SWR
  const { data: usersData, error, mutate } = useSWR(
    token ? `/admin/users?${params}` : null,
    fetcher
  );

  const users = usersData?.data || [];
  const meta = usersData ? { current_page: usersData.current_page, last_page: usersData.last_page, total: usersData.total } : null;
  const loading = !usersData && !error;

  // Initial Geo Load
  useEffect(() => {
    api.get('/divisions').then(r => setDivisions(r.data));
    api.get('/seats').then(r => setSeats(r.data));
  }, []);

  // Fetch Districts when Division changes
  useEffect(() => {
    if (divisionId) {
      api.get(`/districts?pid=${divisionId}`).then(r => setDistricts(r.data));
    } else {
      setDistricts([]);
    }
  }, [divisionId]);

  // Fetch Upazilas when District changes
  useEffect(() => {
    if (districtId) {
      api.get(`/upazilas?pid=${districtId}`).then(r => setUpazilas(r.data));
    } else {
      setUpazilas([]);
    }
  }, [districtId]);

  // Fetch Unions when Upazila changes
  useEffect(() => {
    if (upazilaId) {
      api.get(`/unions?pid=${upazilaId}`).then(r => setUnions(r.data));
    } else {
      setUnions([]);
    }
  }, [upazilaId]);

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/admin/users/${id}`);
      mutate(); // Revalidate SWR
    } catch (e) {
      console.error(e);
    }
  }

  // Fetch Full Details when View Modal Opens
  const handleViewUser = async (user: any) => {
    setSelectedUser(user);
    setLoadingDetails(true);
    setFullUserDetails(null);
    try {
      const res = await api.get(`/admin/users/${user.id}`);
      setFullUserDetails(res.data);
    } catch (error) {
      console.error("Failed to fetch details", error);
    } finally {
      setLoadingDetails(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">ব্যবহারকারী ব্যবস্থাপনা</h2>

        {/* Search */}
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <Input
            placeholder="নাম বা মোবাইল নম্বর খুঁজুন..."
            className="pl-9"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-lg shadow-sm grid grid-cols-4 gap-4 items-center">
        <Select value={divisionId} onValueChange={(val) => {
          setDivisionId(val === "all" ? "" : val);
          setDistrictId(""); // Reset children
          setUpazilaId("");
          setUnionId("");
          setPage(1);
        }}>
          <SelectTrigger>
            <SelectValue placeholder="বিভাগ নির্বাচন করুন" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">সকল বিভাগ</SelectItem>
            {divisions.map((d: any) => (
              <SelectItem key={d.id} value={d.id.toString()}>{d.bn_name}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={districtId} onValueChange={(val) => {
          setDistrictId(val === "all" ? "" : val);
          setUpazilaId(""); // Reset children
          setUnionId("");
          setPage(1);
        }} disabled={!divisionId}>
          <SelectTrigger>
            <SelectValue placeholder="জেলা নির্বাচন করুন" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">সকল জেলা</SelectItem>
            {districts.map((d: any) => (
              <SelectItem key={d.id} value={d.id.toString()}>{d.bn_name}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={upazilaId} onValueChange={(val) => {
          setUpazilaId(val === "all" ? "" : val);
          setUnionId(""); // Reset children
          setPage(1);
        }} disabled={!districtId}>
          <SelectTrigger>
            <SelectValue placeholder="উপজেলা নির্বাচন করুন" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">সকল উপজেলা</SelectItem>
            {upazilas.map((d: any) => (
              <SelectItem key={d.id} value={d.id.toString()}>{d.bn_name}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={unionId} onValueChange={(val) => {
          setUnionId(val === "all" ? "" : val);
          setPage(1);
        }} disabled={!upazilaId}>
          <SelectTrigger>
            <SelectValue placeholder="ইউনিয়ন নির্বাচন করুন" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">সকল ইউনিয়ন</SelectItem>
            {unions.map((d: any) => (
              <SelectItem key={d.id} value={d.id.toString()}>{d.bn_name}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Seat Filter Combobox */}
        <Popover open={seatOpen} onOpenChange={setSeatOpen}>
          <PopoverTrigger asChild>
            <Button
              type="button"
              variant="outline"
              role="combobox"
              aria-expanded={seatOpen}
              className={cn(
                "border-gray-300 justify-between font-normal",
                !seatId && "text-muted-foreground"
              )}
            >
              {seatId
                ? (() => {
                  const seat = seats.find((s: any) => s.id.toString() === seatId);
                  return seat ? `${seat.seat_no} - ${seat.seat_name}` : "আসন নির্বাচন করুন";
                })()
                : "আসন নির্বাচন করুন"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-(--radix-popover-trigger-width) border-gray-300 p-0" align="start" sideOffset={4}>
            <Command
              className='border-gray-300'
              filter={(value, search) => {
                const seat = seats.find((s: any) => s.id.toString() === value);
                if (!seat) return 0;
                const searchLower = search.toLowerCase();
                const matchNo = seat.seat_no.toString().includes(search);
                const matchName = seat.seat_name.toLowerCase().includes(searchLower);
                return matchNo || matchName ? 1 : 0;
              }}
            >
              <CommandInput placeholder="আসন খুঁজুন..." />
              <CommandList>
                <CommandEmpty>কোন আসন পাওয়া যায়নি</CommandEmpty>
                <CommandGroup>
                  <CommandItem
                    value=""
                    onSelect={() => {
                      setSeatId('');
                      setSeatOpen(false);
                      setPage(1);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        !seatId ? "opacity-100" : "opacity-0"
                      )}
                    />
                    সকল আসন
                  </CommandItem>
                  {seats.map((seat: any) => (
                    <CommandItem
                      key={seat.id}
                      value={seat.id.toString()}
                      onSelect={(currentValue) => {
                        setSeatId(currentValue === seatId ? "" : currentValue);
                        setSeatOpen(false);
                        setPage(1);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          seatId === seat.id.toString() ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {seat.seat_no} - {seat.seat_name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <Button variant="outline" className='border-gray-300 w-fit' onClick={() => {
          setDivisionId('');
          setDistrictId('');
          setUpazilaId('');
          setUnionId('');
          setSeatId('');
          setSearch('');
        }}>
          <FilterX />
          <span>রিসেট</span>
        </Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" onValueChange={(v) => { setRoleTab(v); setPage(1); }}>
        <TabsList>
          <TabsTrigger value="all">সবাই</TabsTrigger>
          <TabsTrigger value="user">সাধারণ সমর্থক</TabsTrigger>
          <TabsTrigger value="volunteer">স্বেচ্ছাসেবক</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-300">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">নাম</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">মোবাইল</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">ধরন</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">নিবন্ধনের তারিখ</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {loading ? (
              Array(5).fill(0).map((_, i) => (
                <tr key={i}>
                  <td className="px-6 py-4"><Skeleton className="h-4 w-32" /></td>
                  <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                  <td className="px-6 py-4"><Skeleton className="h-6 w-16" /></td>
                  <td className="px-6 py-4"><Skeleton className="h-4 w-24" /></td>
                  <td className="px-6 py-4 flex justify-end gap-2"><Skeleton className="h-8 w-8" /><Skeleton className="h-8 w-8" /></td>
                </tr>
              ))
            ) : (
              users.map((user: any) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.mobile}</td>
                  <td className="px-6 py-4">
                    {user.profile?.is_volunteer ?
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">স্বেচ্ছাসেবক</span> :
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">সমর্থক</span>
                    }
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(user.created_at).toLocaleDateString('bn-BD')}
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    {/* View Button */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50" onClick={() => handleViewUser(user)}>
                          <Eye size={16} />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>ব্যবহারকারীর বিস্তারিত তথ্য</DialogTitle>
                          <DialogDescription className='hidden' />
                        </DialogHeader>
                        {loadingDetails ? (
                          <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                              <Skeleton className="h-4 w-12 mb-1" />
                              <Skeleton className="h-5 w-32" />
                            </div>
                            <div>
                              <Skeleton className="h-4 w-14 mb-1" />
                              <Skeleton className="h-5 w-28" />
                            </div>
                            <div>
                              <Skeleton className="h-4 w-12 mb-1" />
                              <Skeleton className="h-5 w-24" />
                            </div>
                            <div>
                              <Skeleton className="h-4 w-10 mb-1" />
                              <Skeleton className="h-5 w-24" />
                            </div>
                            <div>
                              <Skeleton className="h-4 w-14 mb-1" />
                              <Skeleton className="h-5 w-28" />
                            </div>
                            <div>
                              <Skeleton className="h-4 w-14 mb-1" />
                              <Skeleton className="h-5 w-28" />
                            </div>
                            <div className="col-span-2 bg-gray-50 p-3 rounded-lg mt-2">
                              <Skeleton className="h-4 w-10 mb-1" />
                              <Skeleton className="h-6 w-48" />
                            </div>
                          </div>
                        ) : fullUserDetails ? (
                          <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                              <label className="text-sm text-gray-500">নাম</label>
                              <p className="font-medium">{fullUserDetails.name}</p>
                            </div>
                            <div>
                              <label className="text-sm text-gray-500">মোবাইল</label>
                              <p className="font-medium">{fullUserDetails.mobile}</p>
                            </div>
                            <div>
                              <label className="text-sm text-gray-500">বিভাগ</label>
                              <p className="font-medium">{fullUserDetails.profile?.division?.bn_name || '-'}</p>
                            </div>
                            <div>
                              <label className="text-sm text-gray-500">জেলা</label>
                              <p className="font-medium">{fullUserDetails.profile?.district?.bn_name || '-'}</p>
                            </div>
                            <div>
                              <label className="text-sm text-gray-500">উপজেলা</label>
                              <p className="font-medium">{fullUserDetails.profile?.upazila?.bn_name || '-'}</p>
                            </div>
                            <div>
                              <label className="text-sm text-gray-500">ইউনিয়ন</label>
                              <p className="font-medium">{fullUserDetails.profile?.union?.bn_name || '-'}</p>
                            </div>

                            <div className="col-span-2 bg-gray-50 p-3 rounded-lg mt-2">
                              <label className="text-sm text-gray-500">আসন</label>
                              <p className="font-bold text-emerald-800">
                                {fullUserDetails.profile?.seat?.seat_no} - {fullUserDetails.profile?.seat?.seat_name}
                              </p>
                            </div>

                            {fullUserDetails.profile?.message && (
                              <div className="col-span-2 mt-2">
                                <label className="text-sm text-gray-500">বার্তা</label>
                                <p className="text-gray-700 bg-gray-50 p-3 rounded">{fullUserDetails.profile?.message}</p>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="text-center text-red-500">তথ্য লোড করতে ব্যর্থ হয়েছে</div>
                        )}
                      </DialogContent>
                    </Dialog>

                    {/* Delete Button */}
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50">
                          <Trash2 size={16} />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>আপনি কি নিশ্চিত?</AlertDialogTitle>
                          <AlertDialogDescription>
                            এই ব্যবহারকারীকে মুছে ফেলা হলে আর পুনরুদ্ধার করা যাবে না।
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>বাতিল</AlertDialogCancel>
                          <AlertDialogAction className="bg-red-600 text-white hover:bg-red-700" onClick={() => handleDelete(user.id)}>মুছে ফেলুন</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {meta && meta.last_page > 1 && (
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-500">
            মোট {meta.total} জন • পৃষ্ঠা {meta.current_page} / {meta.last_page}
          </span>
          <div className="flex gap-2">
            <Button
              variant="outline"
              disabled={meta.current_page === 1}
              onClick={() => setPage(p => p - 1)}
            >
              আগের পৃষ্ঠা
            </Button>
            <Button
              variant="outline"
              disabled={meta.current_page === meta.last_page}
              onClick={() => setPage(p => p + 1)}
            >
              পরের পৃষ্ঠা
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
