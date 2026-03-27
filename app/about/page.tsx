import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col min-h-screen bg-muted/30 justify-center items-center">


        <main className="flex-1">

          <section className="relative bg-white shadow-2xl [clip-path:polygon(0_0,100%_0,100%_20%,100%_95%,0_100%)] rounded-3xl overflow-hidden px-8 md:px-12 py-12 gap-10 items-center justify-center mt-8 w-full">
            <div className="flex flex-col md:flex-row items-center gap-0 justify-center">
              {/* LEFT IMAGE */}
              <div className="relative h-80 md:h-[400px] flex items-end justify-center ml-0">
                <img
                  src="/test-pics.png"
                  alt="person"
                  className="object-contain h-full"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="text-black space-y-6 mr-40 mb-0">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-muted-foreground">
                  Meet the <br />Vision Behind HRVC
                </h2>

                {/* Text */}
                <p className="text-black/70">
                  Emmanuel leads HRVC with a strong commitment to <br />protecting the rights of NYSC corps members.<br />
                  His vision is built on transparency, courage, and ensuring <br />that every corps member has a voice and access to justice.
                </p>


              </div>
            </div>
          </section>

          {/* Partners Section */}
          <section className="py-16 md:py-20">
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


      </div>
      <section className='bg-accent'>
        <div style={{ height: '9px', width: '100%', borderRadius: '50%' }}></div>
      </section>
      <Footer />
    </div>
  );
}
