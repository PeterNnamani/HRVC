'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import {
  ShieldCheck,
  Users,
  MapPin,
  Award,
  ArrowRight,
  Star,
  Calendar,
  MapPinned,
} from 'lucide-react';

const AnimatedCounter = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold tabular-nums tracking-tight text-white">
      {count}
      {suffix}
    </span>
  );
};

const UPCOMING_EVENTS = [
  {
    day: '12',
    month: 'June',
    title: 'Rights awareness briefing',
    description: 'Orientation for new volunteers on intake, confidentiality, and referral pathways.',
    location: 'Enugu',
  },
  {
    day: '24',
    month: 'June',
    title: 'Community legal clinic',
    description: 'Walk-in session connecting residents with pro bono guidance and documentation support.',
    location: 'Asata, Enugu',
  },
  {
    day: '08',
    month: 'July',
    title: 'Media & messaging workshop',
    description: 'Training partners on ethical reporting and survivor-centred storytelling.',
    location: 'Hybrid',
  },
  {
    day: '19',
    month: 'July',
    title: 'Stakeholder roundtable',
    description: 'Discussion with civil society on accountability and local implementation of rights norms.',
    location: 'Enugu',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'HRVC responded with clarity and respect. I understood my options and felt supported at every step.',
    name: 'Esther N.',
    role: 'Corps member',
    location: 'Enugu',
  },
  {
    quote:
      'Professional volunteers and clear communication. The team treated my case with the seriousness it deserved.',
    name: 'Chidi O.',
    role: 'Community organiser',
    location: 'Enugu State',
  },
  {
    quote:
      'They connected our group to resources we did not know existed. The follow-up was consistent.',
    name: 'Amaka I.',
    role: 'Youth advocate',
    location: 'South-East Nigeria',
  },
  {
    quote:
      'Dignity-first approach. I recommend HRVC to anyone navigating a rights issue and unsure where to start.',
    name: 'Ibrahim K.',
    role: 'Educator',
    location: 'Nigeria',
  },
];

export default function Home() {
  const partners = [
    { name: 'Solid FM', logo: '/solidfm.png' },
    { name: 'Urban Radio', logo: '/urbanradio.png' },
    { name: 'Dream FM', logo: '/dreamfm.png' },
    { name: 'Blaze FM', logo: '/blazefm.png' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(234,88,12,0.18),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0)_0%,rgba(15,23,42,0.85)_100%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 sm:pt-20 sm:pb-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-7 sm:space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-orange-300/95">
              <ShieldCheck className="size-3.5 shrink-0" aria-hidden />
              Human rights defence
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold tracking-tight text-white leading-[1.08]">
              Rights protection and volunteer action{' '}
              <span className="text-orange-400">across Nigeria</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              HRVC supports survivors, strengthens communities, and works with partners to advance accountability
              and the rule of law—through legal outreach, training, and on-the-ground volunteers.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-1">
              <a
                href="https://forms.gle/cf4P9VknfNSHzcKT8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-950/25 transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
              >
                Make a report
                <ArrowRight className="size-4" aria-hidden />
              </a>
              <a
                href="https://forms.gle/dZwXWCz6o7MNVsGr6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
              >
                Join as a volunteer
              </a>
            </div>

            <div className="max-w-xl rounded-xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-300">
                    <Calendar className="size-3.5 shrink-0" aria-hidden />
                    Next event
                  </div>
                  <h2 className="mt-1.5 text-base font-semibold text-white sm:text-lg">International Peace Summit</h2>
                  <p className="mt-1 text-sm text-slate-400">17th–18th September 2026 · Abuja, Nigeria</p>
                </div>
                <Link
                  href="/events"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                >
                  Explore events
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>

            <p className="text-xs text-slate-500 max-w-md leading-relaxed">
              Confidential reporting via secure Google Forms. For emergencies, contact local authorities and
              seek immediate safety first.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:justify-self-end w-full max-w-lg mx-auto lg:mx-0"
          >
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-orange-500/30 via-transparent to-transparent blur-2xl" />
            <figure className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-black/40">
              <Image
                src="/emmanuel.jpg"
                alt="HRVC field work and community engagement"
                width={620}
                height={680}
                className="w-full h-auto object-cover aspect-[4/5] sm:aspect-auto"
                priority
              />
              <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 to-transparent px-5 py-4 text-left">
                <span className="text-xs font-medium uppercase tracking-wider text-orange-300/90">Field impact</span>
                <span className="mt-0.5 block text-sm text-slate-200">Volunteer-led outreach and rights education</span>
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </section>

      {/* About — one tight editorial column: photo locks to copy, minimal gutter */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row gap-5 sm:gap-6 lg:gap-8 items-stretch">
            <motion.figure
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex w-[min(46%,14.5rem)] shrink-0 flex-col sm:w-[min(44%,16.5rem)] lg:w-[min(42%,18rem)]"
            >
              <div
                className="relative min-h-0 flex-1 w-full overflow-hidden bg-slate-100
                  rounded-tl-[1rem] rounded-br-[1rem] sm:rounded-tl-[1.15rem] sm:rounded-br-[1.15rem]
                  rounded-tr-none rounded-bl-none
                  shadow-sm ring-1 ring-slate-200/90"
              >
                <Image
                  src="/ceo.png"
                  alt="HRVC leadership and community support"
                  fill
                  className="object-cover object-[center_22%] sm:object-[center_20%]"
                  sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 320px"
                  priority
                />
              </div>
            </motion.figure>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="min-w-0 flex-1 space-y-3 sm:space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-bold tracking-tight text-slate-900 leading-tight">
                About Us
              </h2>
              <div className="h-0.5 w-16 sm:w-20 bg-orange-500" aria-hidden />
              <p className="text-sm sm:text-base font-medium text-slate-700 leading-snug sm:leading-relaxed">
                Human Rights Volunteer Corps — legal support, volunteers, and community partnerships across Nigeria.
              </p>
              <div className="space-y-3 text-slate-500 text-sm sm:text-base leading-relaxed">
                <p>
                  We work with survivors of abuse, marginalised groups, and local leaders to improve access to justice
                  and rights awareness, grounded in confidentiality, dignity, and practical follow-through.
                </p>
                <p>
                  Over 15 years of engagement, HRVC has built structured programmes and accountable coordination for
                  individuals, volunteers, and partner organisations.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/about"
                  className="inline-flex w-fit items-center justify-center bg-orange-500 px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-sm shadow-orange-900/15 transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 rounded-tl-md rounded-bl-md rounded-tr-full rounded-br-full"
                >
                  Learn more
                </Link>
                <Link
                  href="/partner"
                  className="text-xs sm:text-sm font-semibold text-orange-600 transition-colors hover:text-orange-700"
                >
                  Partnerships <span aria-hidden>→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats + events */}
      <section className="py-16 sm:py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-16 sm:mb-20">
            {[
              { icon: ShieldCheck, end: 260, label: 'Cases supported' },
              { icon: Users, end: 110, label: 'Active volunteers' },
              { icon: MapPin, end: 190, label: 'Communities reached' },
              { icon: Award, end: 560, label: 'Awareness sessions' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="text-center"
              >
                <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-xl bg-orange-500/15 ring-1 ring-orange-500/25">
                  <item.icon className="size-7 text-orange-400" strokeWidth={1.75} aria-hidden />
                </div>
                <AnimatedCounter end={item.end} suffix="+" />
                <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">{item.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-14 sm:pt-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400/90 mb-2">Calendar</p>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Upcoming events and activities</h2>
                <p className="mt-2 text-sm text-slate-400 max-w-xl">
                  Dates and venues may be updated. Confirm on the events page before you travel.
                </p>
              </div>
              <Link
                href="/events"
                className="inline-flex items-center justify-center self-start sm:self-auto rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
              >
                View all events
                <ArrowRight className="ml-2 size-4" aria-hidden />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {UPCOMING_EVENTS.map((ev, i) => (
                <motion.article
                  key={`${ev.title}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ delay: i * 0.05, duration: 0.45 }}
                  className="flex flex-col rounded-xl border border-white/10 bg-white/[0.04] p-5 text-left backdrop-blur-sm transition hover:border-white/15 hover:bg-white/[0.06]"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-12 flex-col items-center justify-center rounded-lg bg-orange-500/15 ring-1 ring-orange-500/20">
                        <span className="text-lg font-semibold leading-none text-orange-300">{ev.day}</span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mt-0.5">{ev.month}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-slate-400 ring-1 ring-white/10">
                        <Calendar className="size-3" aria-hidden />
                        Scheduled
                      </span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-base text-white leading-snug">{ev.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed flex-1">{ev.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                    <MapPinned className="size-3.5 shrink-0 text-slate-500" aria-hidden />
                    {ev.location}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">Testimonials</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">What partners and participants say</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Feedback from people who have worked with HRVC through reporting, volunteering, or community programmes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.blockquote
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
                className="flex flex-col rounded-xl border border-slate-200/90 bg-white p-6 shadow-sm"
              >
                <div className="flex gap-0.5 text-orange-500 mb-4" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star key={si} className="size-4 fill-orange-400 text-orange-500" strokeWidth={1.25} />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 pt-5 border-t border-slate-100">
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {t.role} · {t.location}
                  </p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-14 sm:py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Media and strategic partners</p>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Organisations that help amplify rights education and outreach alongside HRVC.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 sm:gap-x-20 sm:gap-y-12 opacity-90">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-[filter,transform] duration-300 hover:scale-[1.02]"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={200}
                  height={72}
                  className="h-12 sm:h-14 w-auto object-contain"
                  priority={index === 0}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
