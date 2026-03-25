import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { ResourceCard } from '@/components/ResourceCard';
import { Phone, FileText, Users, Briefcase, Heart, MapPin } from 'lucide-react';

const RESOURCES = [
  {
    title: 'NYSC Regulations & Guidelines',
    description: 'Complete guide to NYSC rules, regulations, and your obligations as a corps member.',
    href: '#',
    icon: <FileText size={32} />,
  },
  {
    title: 'Legal Aid Services',
    description: 'Connect with free legal assistance providers for help with violations.',
    href: '#',
    icon: <Briefcase size={32} />,
  },
  {
    title: 'Mental Health Support',
    description: 'Access counseling and mental health resources for corps members.',
    href: '#',
    icon: <Heart size={32} />,
  },
  {
    title: 'Local Government Offices',
    description: 'Find NYSC offices in your state for in-person assistance and inquiries.',
    href: '#',
    icon: <MapPin size={32} />,
  },
  {
    title: 'Rights Workshops',
    description: 'Attend free webinars and workshops to learn about your rights.',
    href: '#',
    icon: <Users size={32} />,
  },
  {
    title: 'Emergency Contacts',
    description: 'Quick reference guide for emergency numbers and support lines.',
    href: '#',
    icon: <Phone size={32} />,
  },
];

const EMERGENCY_CONTACTS = [
  {
    name: 'Police (Emergency)',
    number: '191',
    available: '24/7',
  },
  {
    name: 'Ambulance Service',
    number: '112',
    available: '24/7',
  },
  {
    name: 'NYSC Headquarters',
    number: '+234 (9) 2619 4000',
    available: 'Business Hours',
  },
  {
    name: 'HRVC Support Line',
    number: '+234 (123) 456-7890',
    available: '24/7',
  },
];

const DOWNLOADABLE_RESOURCES = [
  {
    title: 'Corps Member Rights Charter',
    description: 'A comprehensive guide to your fundamental rights during service',
    fileName: 'rights-charter.pdf',
  },
  {
    title: 'Reporting Procedures Guide',
    description: 'Step-by-step instructions on how to report violations safely',
    fileName: 'reporting-guide.pdf',
  },
  {
    title: 'NYSC Act & Regulations',
    description: 'Official document outlining the legal framework for service',
    fileName: 'nysc-act.pdf',
  },
  {
    title: 'Welfare Rights Checklist',
    description: 'Quick reference checklist for your welfare entitlements',
    fileName: 'welfare-checklist.pdf',
  },
  {
    title: 'Safety Protocols',
    description: 'Guidelines for staying safe during your service year',
    fileName: 'safety-protocols.pdf',
  },
  {
    title: 'Complaint Documentation Template',
    description: 'Template for documenting incidents for your records',
    fileName: 'incident-template.docx',
  },
];

export default function Resources() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <HeroSection
          title="Resources & Support"
          description="Everything you need to understand your rights, stay safe, and get help."
        />

        {/* Main Resources */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Key Resources
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Access essential information and support tools to help you navigate your service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {RESOURCES.map((resource) => (
                <ResourceCard key={resource.title} {...resource} />
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Emergency Contacts
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EMERGENCY_CONTACTS.map((contact) => (
                <div
                  key={contact.name}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {contact.name}
                  </h3>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-accent">
                      {contact.number}
                    </p>
                    <p className="text-sm text-foreground/60">
                      Available: {contact.available}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-primary text-primary-foreground rounded-lg p-6 text-center">
              <p className="text-lg">
                <strong>In Crisis?</strong> Call emergency services (191) or nearest hospital immediately.
              </p>
            </div>
          </div>
        </section>

        {/* Downloadable Resources */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Downloadable Resources
            </h2>

            <div className="space-y-4">
              {DOWNLOADABLE_RESOURCES.map((resource) => (
                <a
                  key={resource.fileName}
                  href={`/resources/${resource.fileName}`}
                  className="flex items-start justify-between p-6 bg-card border border-border rounded-lg hover:border-accent hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">
                        {resource.title}
                      </h3>
                      <p className="text-foreground/60 text-sm mt-1">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-accent font-semibold whitespace-nowrap ml-4">
                    Download →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Organizations */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Partner Organizations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Legal Aid Foundation
                </h3>
                <p className="text-foreground/60 mb-4">
                  Provides free legal assistance and representation for corps members facing violations.
                </p>
                <a href="#" className="text-accent font-semibold hover:underline">
                  Visit Website →
                </a>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Human Rights Monitor NG
                </h3>
                <p className="text-foreground/60 mb-4">
                  Independent human rights organization documenting and tracking violations across the country.
                </p>
                <a href="#" className="text-accent font-semibold hover:underline">
                  Visit Website →
                </a>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Youth Empowerment Network
                </h3>
                <p className="text-foreground/60 mb-4">
                  Supports youth development and provides training programs for corps members.
                </p>
                <a href="#" className="text-accent font-semibold hover:underline">
                  Visit Website →
                </a>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Digital Rights Africa
                </h3>
                <p className="text-foreground/60 mb-4">
                  Protects digital rights and online safety for young people in Africa.
                </p>
                <a href="#" className="text-accent font-semibold hover:underline">
                  Visit Website →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <details className="bg-card border border-border rounded-lg p-6 group cursor-pointer">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Where can I find my state's NYSC office?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-foreground/60 mt-4">
                  You can find contact information for your state office in our "Local Government Offices" resource or visit the official NYSC website at www.nysc.gov.ng.
                </p>
              </details>

              <details className="bg-card border border-border rounded-lg p-6 group cursor-pointer">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Are these resources free to access?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-foreground/60 mt-4">
                  Yes, all resources provided by HRVC are completely free. Our downloadable guides and information are available to all corps members at no cost.
                </p>
              </details>

              <details className="bg-card border border-border rounded-lg p-6 group cursor-pointer">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  How do I access legal aid services?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-foreground/60 mt-4">
                  Contact the Legal Aid Foundation directly using the contact information provided in our resources section. HRVC can also help connect you with appropriate legal support.
                </p>
              </details>

              <details className="bg-card border border-border rounded-lg p-6 group cursor-pointer">
                <summary className="font-semibold text-foreground flex justify-between items-center">
                  Can I get mental health support during service?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-foreground/60 mt-4">
                  Yes. NYSC camps have medical officers, and many postings have access to counselors. You can also access private counseling services or contact mental health organizations listed in our resources.
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
