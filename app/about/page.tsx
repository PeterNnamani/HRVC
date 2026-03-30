import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 w-full bg-muted/30 flex flex-col items-center justify-center py-12 px-4">
        <section className="w-full max-w-6xl grid gap-16 lg:grid-cols-[1.15fr_0.85fr] items-center mb-20">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-foreground/80 shadow-sm ring-1 ring-gray-200">
              Vision & Purpose
            </div>
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
                Building a future where rights are known, supported, and defended.
              </h1>
              <p className="text-lg leading-8 text-gray-700 max-w-2xl">
                HRVC exists to support NYSC corps members with clear guidance, strong advocacy, and a community that refuses to let injustice stand. We bring together legal insight, trusted partners, and practical tools so every corps member can act with confidence.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-border bg-white/90 p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h2>
                <p className="text-gray-600 leading-7">
                  A world where every corps member understands their rights, feels supported, and can demand fair treatment without fear.
                </p>
              </div>
              <div className="rounded-3xl border border-border bg-white/90 p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Our Purpose</h2>
                <p className="text-gray-600 leading-7">
                  To empower, inform, and protect NYSC corps members by creating accessible resources, trusted advocacy, and a welcoming community of allies.
                </p>
              </div>
            </div>
          </div>

          <div className="relative isolate overflow-visible rounded-[3rem] bg-slate-950/5 p-8 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.35)]">
            <div className="absolute -left-10 top-10 h-44 w-44 rounded-[42%_58%_57%_43%] bg-sky-300/20 blur-3xl" />
            <div className="absolute right-0 bottom-4 h-72 w-72 rounded-[48%_52%_56%_44%] bg-emerald-300/20 blur-3xl" />
            <div className="relative overflow-visible rounded-[2.5rem] border border-white/20 bg-white/95 shadow-2xl">
              <img
                src="/test-pics.png"
                alt="HRVC vision image"
                className="relative -top-8 h-130 w-full rounded-[2.25rem] object-cover shadow-[0_24px_64px_-24px_rgba(15,23,42,0.25)]"
              />
            </div>
          </div>
        </section>

        <section className="w-full max-w-6xl grid gap-8 lg:grid-cols-2 mb-20">
          <div className="rounded-4xl border border-border bg-white/90 p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why We Exist</h2>
            <p className="text-gray-700 leading-8 mb-6">
              Every corps member deserves clarity about their rights, access to support, and a safe space to speak up. HRVC was created to bridge the gap between information and justice, so even the smallest concern can become a step toward meaningful change.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 font-semibold">01</span>
                <span className="leading-7">Raise awareness about NYSC corps member rights and protections.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 font-semibold">02</span>
                <span className="leading-7">Provide clear, practical advice for navigating real challenges.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 font-semibold">03</span>
                <span className="leading-7">Build a trusted community where every voice is heard and valued.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-4xl border border-border bg-white/90 p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Make Impact</h2>
            <p className="text-gray-700 leading-8 mb-6">
              Our work combines education, advocacy, and partnerships so corps members feel equipped, connected, and confident when facing rights-related issues.
            </p>
            <div className="space-y-4">
              <div className="rounded-3xl bg-slate-50 p-5">
                <strong className="block text-sm font-semibold text-slate-900">Trusted resources</strong>
                <span className="text-sm text-slate-600">Clear guides, rights summaries, and next-step recommendations for every situation.</span>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <strong className="block text-sm font-semibold text-slate-900">Community support</strong>
                <span className="text-sm text-slate-600">A welcoming space to share experiences and learn from others who care.</span>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <strong className="block text-sm font-semibold text-slate-900">Partner network</strong>
                <span className="text-sm text-slate-600">Strong collaborations with legal and human rights groups to amplify every voice.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 w-full">
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


