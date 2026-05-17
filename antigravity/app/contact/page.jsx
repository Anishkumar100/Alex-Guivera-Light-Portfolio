import ContactClient from '../../components/sections/contact/ContactClient';
import ContactBackground from '../../components/sections/contact/ContactBackground';

export const metadata = {
  title: 'Contact | Alex Guivera ',
  description: 'Let us build something extraordinary. Get in touch.',
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden bg-white">
      <div className="relative w-full">
        <ContactBackground />
        <ContactClient />
      </div>
    </main>
  );
}
