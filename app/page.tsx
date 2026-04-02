import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { StatsCard } from '@/components/StatsCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { ResourceCard } from '@/components/ResourceCard';
import { Shield, MessageSquare, Users, BookOpen, HeartHandshake, Globe2 } from 'lucide-react';

const teamMembers = [
  {
    name: 'Chinasa Okafor',
    title: 'Legal Outreach Lead',
    image: '/placeholder-user.jpg',
  },
  {
    name: 'Amina Bello',
    title: 'Community Liaison',
    image: '/image.png',
  },
  {
    name: 'Emeka Nwosu',
    title: 'Volunteer Coordinator',
    image: '/test-pics.png',
  },
];

const galleryImages = ['/placeholder.jpg', '/placeholder-user.jpg', '/image.png', '/test-pics.png'];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        <HeroSection
          title="For The People & Cause You Care About"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at layout. HRVC supports survivors and mobilizes volunteers to protect rights across Nigeria."
          primaryCta={{ label: 'Report a Violation', href: '/report' }}
          secondaryCta={{ label: 'Learn Your Rights', href: '/know-your-rights' }}
          imageUrl="/emmanuel.jpg"
        />

        <section className="pt-0 pb-16 md:pb-20 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.15),transparent_45%)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
              <div className="space-y-6">
                <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-accent font-semibold">
                  About Us
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Helping Each Other can Make World Better
                </h2>
                <p className="max-w-2xl text-base md:text-lg leading-8 text-foreground/75">
                  Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur. Nonprofits around the world apply and join us to access more funding.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-border bg-background/90 p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4 text-accent">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                        ♥
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Start Helping Team</p>
                        <p className="text-xs text-foreground/70">There are many variations of solve</p>
                      </div>
                    </div>
                    <div className="flex -space-x-3">
                      <div className="h-10 w-10 rounded-full border-2 border-background bg-slate-900" />
                      <div className="h-10 w-10 rounded-full border-2 border-background bg-slate-800" />
                      <div className="h-10 w-10 rounded-full border-2 border-background bg-slate-700" />
                      <div className="h-10 w-10 rounded-full border-2 border-background bg-slate-600" />
                    </div>
                  </div>

                  <div className="rounded-3xl border border-border bg-card p-6 shadow-xl">
                    <p className="text-sm uppercase tracking-[0.3em] text-accent mb-3">Call Any Time</p>
                    <p className="text-2xl font-semibold text-foreground">+61 2345 678 990</p>
                    <p className="mt-3 text-sm text-foreground/70">
                      Our team is ready to support you whenever you need guidance or assistance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mx-auto max-w-lg">
                <div className="relative h-96 w-96 overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-slate-900/10 octagon-mask mx-auto">
                  <Image
                    src="/ceo.png"
                    alt="CEO"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="uppercase tracking-[0.3em] text-sm font-semibold text-accent mb-4">
                Empowerment in action
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Support people by raising awareness
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                HRVC connects victims, volunteers, and legal support to defend rights and transform communities.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="rounded-3xl border border-border bg-background/90 p-8 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.3em] text-accent mb-3">Active response</p>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">1,280 cases handled</h3>
                  <p className="text-sm text-foreground/70">Every report is tracked, investigated, and referred to the right support network.</p>
                </div>
                <div className="rounded-3xl border border-border bg-background/90 p-8 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.3em] text-accent mb-3">Volunteer reach</p>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">3,100 active volunteers</h3>
                  <p className="text-sm text-foreground/70">A growing community of trained activists and rights monitors across the country.</p>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-accent">Campaign progress</p>
                    <h3 className="text-2xl font-semibold text-foreground">Goal: 5,000 reports</h3>
                  </div>
                  <span className="text-xs uppercase text-foreground/70">68% complete</span>
                </div>
                <div className="h-3 w-full rounded-full bg-muted border border-border overflow-hidden mb-4">
                  <div className="h-full w-[68%] rounded-full bg-accent" />
                </div>
                <p className="text-sm text-foreground/70">We are building a safer environment by making it easier for survivors to speak out and get help.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="uppercase tracking-[0.3em] text-sm font-semibold text-accent mb-4">
                Why join HRVC
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why we need you to become a volunteer
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Volunteers help bridge the gap between communities and legal support, creating safer spaces and better outcomes for survivors.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <ResourceCard
                title="Community Support"
                description="Provide direct assistance to survivors and strengthen local networks."
                href="/get-involved"
                icon={<HeartHandshake size={32} />}
              />
              <ResourceCard
                title="Rights Education"
                description="Help people understand their rights and how to respond to violations."
                href="/know-your-rights"
                icon={<Globe2 size={32} />}
              />
              <ResourceCard
                title="Safe Reporting"
                description="Keep reporting confidential and guide people through next steps."
                href="/report"
                icon={<Shield size={32} />}
              />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="uppercase tracking-[0.3em] text-sm font-semibold text-accent mb-4">
                Our team</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Skilled human rights professionals dedicated to you
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                A diverse team of lawyers, organizers and volunteers working together to protect human dignity.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {teamMembers.map((member) => (
                <div key={member.name} className="rounded-3xl border border-border bg-background p-6 text-center shadow-sm">
                  <div className="mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full border border-border bg-muted">
                    <Image
                      src={member.image}
                      width={160}
                      height={160}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-sm text-foreground/70">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="uppercase tracking-[0.3em] text-sm font-semibold text-accent mb-4">
                Testimonials</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What they are talking about HRVC
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Stories from survivors and volunteers who found strength through our movement.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <TestimonialCard
                quote="HRVC helped me speak up and get support when no one else would listen."
                author="Esther Howard"
                role="Volunteer"
              />
              <TestimonialCard
                quote="The awareness campaigns helped my community understand their rights and feel safer."
                author="John Doe"
                role="Community Leader"
              />
              <TestimonialCard
                quote="Knowing there is a team behind me made all the difference in reporting my case."
                author="Grace Nwankwo"
                role="Rights Advocate"
              />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="uppercase tracking-[0.3em] text-sm font-semibold text-accent mb-4">
                Gallery</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Change the world together
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Moments from our programs, trainings, and volunteer actions across Nigeria.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
                  <Image src={src} alt={`Gallery ${index + 1}`} width={400} height={300} className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-accent text-accent-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="uppercase tracking-[0.3em] text-sm font-semibold mb-4">Take action</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join HRVC and protect rights everywhere
            </h2>
            <p className="text-lg opacity-95 max-w-2xl mx-auto mb-8">
              Be part of the movement that defends dignity, educates communities, and helps victims find justice.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/get-involved" className="inline-flex items-center justify-center rounded-full bg-background px-8 py-3 text-sm font-semibold text-foreground shadow-lg hover:shadow-xl transition">
                Join as a Volunteer
              </a>
              <a href="/report" className="inline-flex items-center justify-center rounded-full border border-background bg-transparent px-8 py-3 text-sm font-semibold text-background hover:bg-background/10 transition">
                Report Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
