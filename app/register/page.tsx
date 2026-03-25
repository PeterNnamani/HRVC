import { VolunteerRegistrationForm } from '@/components/VolunteerRegistrationForm';

export const metadata = {
  title: 'Volunteer Registration | HRVC',
  description: 'Register to become a volunteer with HRVC and help fight for human rights.',
};

export default function RegisterPage() {
  return (
    <main>
      <VolunteerRegistrationForm />
    </main>
  );
}
