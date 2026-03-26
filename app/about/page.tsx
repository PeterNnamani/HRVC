import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">

        <section className="relative bg-background rounded-3xl overflow-hidden px-6 md:px-12 py-12 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div className="relative h-80 md:h-[400px] flex items-end justify-center">
            <img
              src="/test-pics.png"
              alt="person"
              className="object-contain h-full"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-black space-y-6">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Meet the Vision Behind HRVC
            </h2>

            {/* Text */}
            <p className="text-black/70">
              Emmanuel leads HRVC with a strong commitment to protecting the rights of NYSC corps members.
              His vision is built on transparency, courage, and ensuring that every corps member has a voice and access to justice.
            </p>


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
        <section className='bg-accent'>
          <div style={{ height: '9px', width: '100%', borderRadius: '50%' }}></div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
