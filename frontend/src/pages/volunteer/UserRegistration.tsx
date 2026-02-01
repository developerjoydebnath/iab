import { useState } from 'react';
import { SupporterFormSection } from '../../components/SupporterFormSection';

export function VolunteerUserRegistration() {
  const [refetch, setRefetch] = useState<number>(1);
  return (
    <div className="bg-emerald-50 min-h-[calc(100vh-(--spacing(16)))] rounded-lg p-6">
        <div className="mb-6 border-b pb-4">
             <h2 className="text-2xl font-bold text-gray-800">নতুন ভোটার নিবন্ধন</h2>
             <p className="text-gray-500">আপনার এলাকার নতুন সমর্থক/ভোটার নিবন্ধন করুন</p>
        </div>
        
      {/* We pass isVolunteerRegistration=false to indicate this is a USER registration (by volunteer) 
          Wait, SupporterFormSection logic for `isVolunteerRegistration` essentially forces the role to VOLUNTEER.
          Here we want to register a USER, but as a logged-in volunteer.
          
          We should probably update SupporterFormSection to handle "Registering User BY Volunteer".
          Or better, passing `searchParams` via a wrapper or context might be tricky.
          
          Let's verify SupporterFormSection logic:
           - role: isVolunteerRegistration ? 'volunteer' : (searchParams.get('role') || 'user')
           
           If I pass isVolunteerRegistration=false, it falls back to searchParams.
           If I am in the dashboard, searchParams might be empty, so default 'user'.
           So passing false (default) works for 'user' registration.
           
           However, I need to ensure `referral_id` is sent.
           SupporterFormSection doesn't currently handle `referral_id` explicitly in the form payload construction unless it's in the form logic?
           Wait, looking at AuthController, it expects `referral_id` in request body.
           SupporterFormSection onSubmit does:
           const payload = { ...values, ... }
           
           Where does referral_id come from?
           AuthController: 'referral_id' => $request->get('referral_id'),
           
           If the user is logged in (Volunteer), the API *could* infer referral_id using Auth::id()?
           The current `AuthController.php` -> `register` method:
             $user = User::create([ ... 'referral_id' => $request->get('referral_id') ... ]);
           
           It takes it from Request.
           BUT, since I'm logged in as Volunteer, does the API automatically attach it? 
           No, the register endpoint is public usually, but here I am calling it as an authenticated volunteer.
           
           If I am authenticated, `Auth::guard('api')->user()` is available.
           I should update `AuthController.php` to:
             if (Auth::guard('api')->check()) {
                 $referrer = Auth::guard('api')->user();
                 if ($referrer->role === 'volunteer') {
                     $referral_id = $referrer->id;
                 }
             }
             
           Let's update AuthController to handle this auto-referral.
           Then here I just need to render the form.
      */}
      <SupporterFormSection setRefetch={setRefetch} refetch={refetch} isVolunteerRegistration={false} isEmbedded={true} />
    </div>
  );
}
