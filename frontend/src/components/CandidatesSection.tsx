import { MapPin, Search, User, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import api from "../lib/axios";

interface Seat {
  id: number;
  seat_no: string;
  seat_name: string;
  candidate_name: string;
  area: string[];
  created_at: string;
  updated_at: string;
}

export function CandidatesSection() {
  const [seats, setSeats] = useState<Seat[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const stats = [
    { value: "৩০০", label: "মোট আসন" },
    { value: "৬৪", label: "জেলা" },
    { value: "৮", label: "বিভাগ" },
    { value: "৮৬%", label: "কভারেজ" },
  ];

  useEffect(() => {
    const fetchInitial = async () => {
      try {
        const seatRes = await api.get('/seats');
        const sanitizedData = seatRes?.data ? seatRes?.data?.filter((seat: Seat) => !!seat?.candidate_name) : null;

        setSeats(sanitizedData);
      } catch (error) {
        console.error("Failed to fetch initial data", error);
      }
    };
    fetchInitial();
  }, []);

  // Clear search function
  const clearSearch = () => {
    setSearchTerm("");
  };

  // Filter seats based on search term
  const filteredSeats = useMemo(() => {
    if (!searchTerm.trim()) return seats;

    const term = searchTerm.toLowerCase();

    return seats.filter(seat => seat?.candidate_name !== null).filter(seat =>
      seat.candidate_name.toLowerCase().includes(term) ||
      seat.seat_no.includes(term) ||
      seat.seat_name.toLowerCase().includes(term) ||
      seat.area.some(area => area.toLowerCase().includes(term))
    );
  }, [seats, searchTerm]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredSeats.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSeats = filteredSeats.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset to first page when searching
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div id="candidates" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <div className="bg-emerald-100 text-emerald-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
              জাতীয় নির্বাচন ২০২৪
            </div>
          </div>
          <h2 className="font-bn text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 mb-3 sm:mb-4">
            আমাদের প্রার্থীগণ
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-emerald-700 max-w-3xl mx-auto px-4">
            ২৫৯ টি আসনে আমাদের যোগ্য, সৎ ও দক্ষ প্রার্থীরা প্রতিদ্বন্দ্বিতা করছেন
          </p>
        </div>

        {/* Stats Banner */}
        <div className="mb-12 sm:mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-600 to-green-600 p-4 sm:p-6 text-white shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-14 h-14 sm:w-20 sm:h-20 bg-white/5 rounded-full"></div>

                <div className="relative z-10">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 font-bn">{stat.value}</div>
                  <div className="text-sm sm:text-base md:text-lg font-medium text-emerald-100">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search Bar with Clear Button */}
        <div className="mb-8 sm:mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
                </div>
                <input
                  type="text"
                  placeholder="প্রার্থীর নাম, আসন নম্বর বা এলাকা দিয়ে খুঁজুন..."
                  className="w-full pl-9 sm:pl-10 pr-4 py-3 sm:py-4 bg-white border-2 border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-base sm:text-lg shadow-sm transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <span className="text-emerald-500 text-xs sm:text-sm font-medium">
                    {filteredSeats.length} জন
                  </span>
                </div>
              </div>

              {/* Clear Search Button */}
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 font-medium rounded-xl transition-all duration-300 hover:shadow-md border border-emerald-200 whitespace-nowrap"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">রিসেট করুন</span>
                </button>
              )}
            </div>

            {/* Search status text for mobile */}
            <div className="mt-2 text-center sm:hidden">
              <span className="text-sm text-emerald-600">
                {searchTerm ? `"${searchTerm}" এর ফলাফল` : "সকল প্রার্থী"}
              </span>
            </div>
          </div>
        </div>

        {/* Candidates Grid */}
        <div className="mb-8 sm:mb-12">
          {currentSeats.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {currentSeats.map((seat) => (
                <div
                  key={seat.id}
                  className="group flex flex-col h-full bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-100 overflow-hidden"
                >
                  {/* Card Header with Gradient */}
                  <div className="bg-gradient-to-r from-emerald-600 to-green-600 px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg sm:text-xl font-bold text-white font-bn line-clamp-1">
                          {seat.candidate_name}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white pt-2 font-bn border-t border-dashed mt-2 border-gray-300 line-clamp-1">
                      {seat.seat_name}
                    </h3>
                  </div>

                  {/* Card Body - This will expand to fill available space */}
                  <div className="p-4 sm:p-6 flex-grow">
                    {/* Candidate Name */}
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="bg-emerald-100 p-2 sm:p-3 rounded-lg sm:rounded-xl">
                        <User className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs sm:text-sm font-medium text-emerald-600 mb-1">
                          প্রার্থীর নাম
                        </div>
                        <div className="text-base sm:text-lg font-bold text-emerald-700 font-bn line-clamp-2">
                          {seat.candidate_name}
                        </div>
                      </div>
                    </div>

                    {/* Area */}
                    <div className="flex items-start space-x-3">
                      <div className="bg-emerald-100 p-2 sm:p-3 rounded-lg sm:rounded-xl flex-shrink-0">
                        <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs sm:text-sm font-medium text-emerald-600 mb-1">
                          নির্বাচনী এলাকা
                        </div>
                        <div className="text-gray-700">
                          {seat.area.map((area, index) => {
                            try {
                              const parsedArea = JSON.parse(area);
                              return Array.isArray(parsedArea) ? (
                                <div key={index} className="space-y-1">
                                  {parsedArea.map((item, i) => (
                                    <div
                                      key={i}
                                      className="inline-block bg-emerald-50 text-emerald-700 px-2 py-1 rounded-lg text-xs mr-1 mb-1"
                                    >
                                      {item}
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <div key={index} className="text-xs sm:text-sm text-gray-700 font-bn line-clamp-3">
                                  {parsedArea}
                                </div>
                              );
                            } catch {
                              return (
                                <div key={index} className="text-xs sm:text-sm text-gray-700 font-bn line-clamp-3">
                                  {area}
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer - This will always stay at the bottom */}
                  <div className="px-4 sm:px-6 py-3 sm:py-4 bg-emerald-50 border-t border-emerald-100 mt-auto">
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-emerald-600 font-medium">
                        আসন: {seat?.seat_no}
                      </span>
                      <span className="text-xs text-emerald-500 bg-emerald-100 px-2 py-1 rounded">
                        নির্বাচন ২০২৬
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto px-4">
                <div className="bg-emerald-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  কোনো প্রার্থী পাওয়া যায়নি
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  "{searchTerm}" এর সাথে মিলছে না। অনুগ্রহ করে অন্য কোন শব্দ দিয়ে খুঁজুন।
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-gray-600 order-2 sm:order-1">
              {filteredSeats.length} জন প্রার্থীর মধ্যে {startIndex + 1}-{Math.min(endIndex, filteredSeats.length)} দেখানো হচ্ছে
            </div>
            <div className="flex items-center space-x-2 order-1 sm:order-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 sm:px-4 py-2 rounded-lg border border-emerald-200 text-emerald-700 hover:bg-emerald-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base"
              >
                পূর্ববর্তী
              </button>

              <div className="flex items-center space-x-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center font-medium transition-colors text-sm sm:text-base ${currentPage === pageNum
                        ? 'bg-emerald-600 text-white'
                        : 'text-emerald-700 hover:bg-emerald-50'
                        }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 sm:px-4 py-2 rounded-lg border border-emerald-200 text-emerald-700 hover:bg-emerald-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base"
              >
                পরবর্তী
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}