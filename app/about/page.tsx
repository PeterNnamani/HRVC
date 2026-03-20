import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <HeroSection
          title="About HRVC"
          description="Fighting for the rights of NYSC corps members since 2020."
        />

        {/* Mission Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-foreground text-xl font-bold">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Our Mission</h3>
                <p className="text-foreground/60">
                  To protect and advocate for the human rights of NYSC corps members through education, documentation, and community support.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-foreground text-xl font-bold">👁️</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Our Vision</h3>
                <p className="text-foreground/60">
                  A Nigeria where every corps member is treated with dignity and their rights are fully respected.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-foreground text-xl font-bold">💪</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Our Values</h3>
                <p className="text-foreground/60">
                  Justice, transparency, empowerment, and solidarity with all those fighting for human rights.
                </p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-8 mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">Why We Focus on NYSC</h2>
              <p className="text-foreground/80 mb-4">
                NYSC corps members represent millions of young Nigerians at a critical point in their lives. Despite their contributions to national development, they often face:
              </p>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Inadequate welfare provisions and delayed allowance payments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Safety and security concerns during service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Limited access to medical care and insurance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Restrictions on freedom of expression and assembly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">•</span>
                  <span>Limited mechanisms to report violations without fear of retaliation</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Our Commitments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Anonymous Reporting</h3>
                  <p className="text-foreground/60">
                    We maintain strict confidentiality for all reports. No reporter information is shared with authorities without explicit consent.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Education & Awareness</h3>
                  <p className="text-foreground/60">
                    We provide free resources, trainings, and workshops to help corps members understand and protect their rights.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Community Support</h3>
                  <p className="text-foreground/60">
                    We foster a supportive community where corps members can share experiences, seek advice, and find solidarity.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Advocacy & Change</h3>
                  <p className="text-foreground/60">
                    We use documented cases to advocate for policy changes and systemic improvements in how corps members are treated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Our Partners
            </h2>
            <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
              We work alongside legal organizations, human rights groups, and international partners to amplify our impact and provide comprehensive support.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Legal Aid Foundation',
                'Human Rights Monitor NG',
                'Youth Empowerment Network',
                'Justice & Equality Initiative',
                'Community Support Alliance',
                'Digital Rights Africa',
              ].map((partner) => (
                <div
                  key={partner}
                  className="bg-card border border-border rounded-lg p-4 text-center text-foreground/70"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
