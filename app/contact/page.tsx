import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <HeroSection
          title="Contact Us"
          description="The Human Rights Volunteer Corps (HRVC) is a movement in Nigeria dedicated to creating a new Human Rights culture, anchored on the rule of law, and driven by the supremacy of the people. For more information or to get involved, contact HRVC at 0807 883 6002 or visit our office in Enugu."
        />

        {/* Contact Methods */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Email */}
              <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                <p className="text-foreground/60 mb-4">Send us your questions or concerns</p>
                <a
                  href="mailto:info@hrvc.org"
                  className="text-accent font-semibold hover:underline"
                >
                  info@hrvc.org
                </a>
              </div>

              {/* Phone */}
              <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-foreground/60 mb-4">Call us during business hours or for urgent support.</p>
                <a
                  href="tel:+2348078836002"
                  className="text-accent font-semibold hover:underline"
                >
                  +234 807 883 6002
                </a>
              </div>

              {/* WhatsApp */}
              <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-accent hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">WhatsApp</h3>
                <p className="text-foreground/60 mb-4">Quick messaging for urgent matters</p>
                <a
                  href="https://wa.me/2348078836002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-semibold hover:underline"
                >
                  Message Us
                </a>
              </div>
            </div>

            {/* Office Info */}
            <div className="bg-muted/30 rounded-lg p-8 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin size={24} className="text-accent" />
                    <h3 className="text-lg font-semibold text-foreground">Office Location</h3>
                  </div>
                  <p className="text-foreground/60">
                    12, Connor Street<br />
                    Asata, Enugu<br />
                    Nigeria
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Clock size={24} className="text-accent" />
                    <h3 className="text-lg font-semibold text-foreground">Working Hours</h3>
                  </div>
                  <p className="text-foreground/60">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday & Holidays: Closed<br />
                    <strong>Emergency Support: 24/7</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Send us a Message
            </h2>

            <form className="bg-card border border-border rounded-lg p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select a subject</option>
                  <option value="inquiry">General Inquiry</option>
                  <option value="volunteer">Volunteer Opportunity</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <details className="bg-card border border-border rounded-lg p-6 group cursor-pointer">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  How long does it take to get a response?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-foreground/60 mt-4">
                  We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters, please call our hotline directly.
                </p>
              </details>

              <details className="bg-card border border-border rounded-lg p-6 group cursor-pointer">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Can I visit your office?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-foreground/60 mt-4">
                  Yes, we welcome visitors during our working hours. Please call ahead to schedule an appointment to ensure someone is available to assist you.
                </p>
              </details>

              <details className="bg-card border border-border rounded-lg p-6 group cursor-pointer">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  What languages do you support?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-foreground/60 mt-4">
                  We primarily communicate in English. However, our team can assist with major Nigerian languages. Please mention your preferred language when contacting us.
                </p>
              </details>

              <details className="bg-card border border-border rounded-lg p-6 group cursor-pointer">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Is my contact information confidential?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-foreground/60 mt-4">
                  Yes, all personal information is handled confidentially and in accordance with our privacy policy. We will never share your information without consent.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
