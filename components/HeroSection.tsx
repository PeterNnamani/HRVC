import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  title: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  imageUrl?: string;
}

export function HeroSection({
  title,
  description,
  primaryCta,
  secondaryCta,
  imageUrl,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-16 pb-0 sm:pt-20 sm:pb-0">
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-accent/15 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div className="space-y-6 lg:translate-x-6 lg:-translate-y-200 xl:translate-x-8 xl:-translate-y-24">
            <p className="inline-flex items-center rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600">
              Change The World Together
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground max-w-3xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base md:text-lg leading-8 text-foreground/75">
              {description}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {primaryCta && (
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/20 hover:bg-accent/90"
                >
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border border-border px-8 py-3 text-sm font-semibold text-foreground hover:bg-muted"
                >
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70">
              <div className="flex -space-x-3">
                <div className="h-10 w-10 rounded-full border-2 border-background bg-slate-900" />
                <div className="h-10 w-10 rounded-full border-2 border-background bg-slate-800" />
                <div className="h-10 w-10 rounded-full border-2 border-background bg-slate-700" />
                <div className="h-10 w-10 rounded-full border-2 border-background bg-slate-600" />
              </div>
              <span className="font-semibold text-foreground">2.0M</span>
              <span>Active supporters</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-160 sm:max-w-208 lg:translate-x-36 xl:translate-x-48 lg:-translate-y-24 xl:-translate-y-44">
            <div className="absolute -left-10 -top-12 h-52 w-52 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-full border border-border bg-card shadow-2xl shadow-slate-900/10">
              <div className="absolute -right-72 -top-60 h-96 w-96 rounded-full bg-background/90 shadow-lg shadow-slate-900/10" />
              <div className="relative aspect-square w-full">
                <Image
                  src={imageUrl ?? '/emmanuel.jpg'}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
