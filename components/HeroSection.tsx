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
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background wrapper that zooms */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full bg-cover bg-center will-change-transform"
      style={{
        backgroundImage: "url('/emmanuel.jpg')",
        animation: "zoom 8s ease-in-out infinite"
      }}
      ></div>
      
      </div>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 text-balance">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {primaryCta && (
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2"
                >
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          </div>

          {/* Image placeholder - can be replaced with actual image */}
          {imageUrl && (
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
