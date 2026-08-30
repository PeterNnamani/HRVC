import { Navbar } from '@/components/Navbar';
import { VolunteerRegistrationForm } from '@/components/VolunteerRegistrationForm';

export const metadata = {
  title: 'Volunteer Registration | HRVC',
  description: 'Register to become a volunteer with HRVC and help fight for human rights.',
};

export default function RegisterPage() {
  return (
    <main>
      <Navbar />
      {/* Header */}
      <div className="relative bg-cover text-white py-12 h-[35vh]" style={{ backgroundImage: "url('/ngo-boy.jpg')" }}>
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold">Register</h1>
          <div className="mt-3 inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full text-sm">
            Home <span className="text-orange-400">»</span> Register
          </div>
        </div>
      </div>
      <VolunteerRegistrationForm />
    </main>
  );
}
