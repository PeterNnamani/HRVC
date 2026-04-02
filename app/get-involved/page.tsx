import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { Users, Heart, Megaphone, BookOpen } from 'lucide-react';

export default function GetInvolved() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <HeroSection
          title="Get Involved"
          description="Join our movement to protect human rights in Nigeria. There are many ways to contribute."
        />

        {/* Ways to Help */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              How You Can Help
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Volunteer */}
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Users size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Volunteer with Us</h3>
                <p className="text-foreground/60 mb-6">
                  Help protect people's rights by volunteering your time and skills. We have opportunities for various roles including outreach, support, and administration.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-foreground/70">
                    <strong>Roles available:</strong>
                  </p>
                  <ul className="text-sm text-foreground/60 space-y-1 ml-4">
                    <li>• Rights Education Facilitator</li>
                    <li>• Community Outreach Ambassador</li>
                    <li>• Legal Support Advisor</li>
                    <li>• Social Media & Communications</li>
                    <li>• Administrative Support</li>
                  </ul>
                </div>
                <a
                  href="#volunteer-form"
                  className="inline-block px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                >
                  Volunteer Now
                </a>
              </div>

              {/* Donate */}
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Heart size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Donate to Support Us</h3>
                <p className="text-foreground/60 mb-6">
                  Your financial contributions help us continue our work protecting rights and supporting survivors. Every donation makes a difference.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-foreground/70">
                    <strong>Your donation helps us:</strong>
                  </p>
                  <ul className="text-sm text-foreground/60 space-y-1 ml-4">
                    <li>• Provide legal assistance</li>
                    <li>• Run educational programs</li>
                    <li>• Support affected corps members</li>
                    <li>• Advocate for policy changes</li>
                  </ul>
                </div>
                <a
                  href="#"
                  className="inline-block px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                >
                  Donate Now
                </a>
              </div>

              {/* Advocate */}
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Megaphone size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Become an Advocate</h3>
                <p className="text-foreground/60 mb-6">
                  Help spread awareness about human rights. Use your voice and platform to advocate for change in your community.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-foreground/70">
                    <strong>You can:</strong>
                  </p>
                  <ul className="text-sm text-foreground/60 space-y-1 ml-4">
                    <li>• Share our content on social media</li>
                    <li>• Host awareness events</li>
                    <li>• Write about corps member rights</li>
                    <li>• Engage with policymakers</li>
                  </ul>
                </div>
                <a
                  href="#"
                  className="inline-block px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                >
                  Learn More
                </a>
              </div>

              {/* Share Knowledge */}
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Share Your Story</h3>
                <p className="text-foreground/60 mb-6">
                  If you have experience with violations or have found ways to advocate effectively, your story can inspire others.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-foreground/70">
                    <strong>Your story can:</strong>
                  </p>
                  <ul className="text-sm text-foreground/60 space-y-1 ml-4">
                    <li>• Inspire other corps members</li>
                    <li>• Document human rights abuses</li>
                    <li>• Show paths to justice</li>
                    <li>• Create awareness (anonymously)</li>
                  </ul>
                </div>
                <a
                  href="/report"
                  className="inline-block px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                >
                  Share Your Story
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Form */}
        <section id="volunteer-form" className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Volunteer Application
            </h2>

            <form className="bg-card border border-border rounded-lg p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+234 (123) 456-7890"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-semibold text-foreground mb-2">
                    State/Location
                  </label>
                  <input
                    type="text"
                    id="state"
                    placeholder="Your state"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-foreground mb-2">
                  Preferred Role
                </label>
                <select
                  id="role"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select a role</option>
                  <option value="education">Rights Education Facilitator</option>
                  <option value="outreach">Community Outreach Ambassador</option>
                  <option value="legal">Legal Support Advisor</option>
                  <option value="social">Social Media & Communications</option>
                  <option value="admin">Administrative Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-semibold text-foreground mb-2">
                  Relevant Experience or Skills
                </label>
                <textarea
                  id="experience"
                  placeholder="Tell us about your background and why you want to volunteer"
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                />
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-semibold text-foreground mb-2">
                  How many hours per week can you commit?
                </label>
                <select
                  id="availability"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select availability</option>
                  <option value="5">5-10 hours/week</option>
                  <option value="10">10-15 hours/week</option>
                  <option value="15">15-20 hours/week</option>
                  <option value="20">20+ hours/week</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Submit Application
              </button>

              <p className="text-xs text-foreground/60 text-center">
                We review applications weekly and will contact you within 5-7 business days.
              </p>
            </form>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Upcoming Events
            </h2>

            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Rights Education Webinar
                    </h3>
                    <p className="text-foreground/60 text-sm mb-2">
                      Learn about rights and protections from legal experts.
                    </p>
                    <p className="text-sm text-accent font-medium">April 5, 2024 • 6:00 PM WAT</p>
                  </div>
                  <a
                    href="#"
                    className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap"
                  >
                    Register
                  </a>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Community Awareness Event
                    </h3>
                    <p className="text-foreground/60 text-sm mb-2">
                      Join us for a community discussion about human rights in your area.
                    </p>
                    <p className="text-sm text-accent font-medium">April 12, 2024 • 10:00 AM WAT</p>
                  </div>
                  <a
                    href="#"
                    className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Volunteer Training Session
                    </h3>
                    <p className="text-foreground/60 text-sm mb-2">
                      Training for new volunteers on effective advocacy and support methods
                    </p>
                    <p className="text-sm text-accent font-medium">April 20, 2024 • 2:00 PM WAT</p>
                  </div>
                  <a
                    href="#"
                    className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap"
                  >
                    Enroll
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Our Collective Impact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card rounded-lg p-6">
                <p className="text-4xl font-bold text-accent mb-2">200+</p>
                <p className="text-foreground font-medium">Active Volunteers</p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <p className="text-4xl font-bold text-accent mb-2">5,000+</p>
                <p className="text-foreground font-medium">Lives Impacted</p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <p className="text-4xl font-bold text-accent mb-2">45</p>
                <p className="text-foreground font-medium">States Represented</p>
              </div>
            </div>

            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Together, we are creating real change for corps members across Nigeria. Join us in this movement.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
