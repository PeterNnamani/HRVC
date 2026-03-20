import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { StatsCard } from '@/components/StatsCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { ResourceCard } from '@/components/ResourceCard';
import { Shield, MessageSquare, Users, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          title="Protecting Your Rights"
          description="HRVC is dedicated to safeguarding the human rights of NYSC corps members. Know your rights, report violations anonymously, and join a community fighting for justice."
          primaryCta={{
            label: 'Report a Violation',
            href: '/report',
          }}
          secondaryCta={{
            label: 'Learn Your Rights',
            href: '/know-your-rights',
          }}
        />

        {/* Stats Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Impact
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                HRVC has been working to protect and advocate for the rights of thousands of corps members.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <StatsCard
                number="500+"
                label="Violations Reported"
                description="Cases documented and addressed"
              />
              <StatsCard
                number="2,000+"
                label="Corps Members Helped"
                description="Direct assistance and support"
              />
              <StatsCard
                number="45"
                label="Partner Organizations"
                description="Working together for change"
              />
              <StatsCard
                number="98%"
                label="Anonymous Reports"
                description="Your privacy is protected"
              />
            </div>
          </div>
        </section>

        {/* Featured Resources Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What We Offer
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Comprehensive resources to help you protect your rights and find support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ResourceCard
                title="Know Your Rights"
                description="Learn about NYSC rights, welfare policies, and protections"
                href="/know-your-rights"
                icon={<Shield size={32} />}
              />
              <ResourceCard
                title="Report Safely"
                description="Anonymous violation reporting with full confidentiality"
                href="/report"
                icon={<MessageSquare size={32} />}
              />
              <ResourceCard
                title="Get Resources"
                description="Access legal guides, emergency contacts, and support materials"
                href="/resources"
                icon={<BookOpen size={32} />}
              />
              <ResourceCard
                title="Join Community"
                description="Volunteer, share stories, and make a difference"
                href="/get-involved"
                icon={<Users size={32} />}
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Stories of Impact
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Real stories from corps members who found support and justice through HRVC.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TestimonialCard
                quote="HRVC helped me report a violation that I was too afraid to share with anyone else. They took my case seriously and provided real support."
                author="Anonymous Corps Member"
                role="NYSC 2023"
              />
              <TestimonialCard
                quote="The resources on HRVC helped me understand my rights better. I felt empowered knowing what I was entitled to during my service."
                author="Anonymous Corps Member"
                role="NYSC 2023"
              />
              <TestimonialCard
                quote="Being part of the HRVC community has given me a platform to help others. I'm grateful for the work this organization does."
                author="Anonymous Volunteer"
                role="HRVC Advocate"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Rights Matter
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              If you or someone you know has experienced a violation, we're here to help. Report anonymously today.
            </p>
            <a
              href="/report"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Report a Violation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
