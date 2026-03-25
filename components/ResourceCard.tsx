import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

export function ResourceCard({
  title,
  description,
  href,
  icon,
}: ResourceCardProps) {
  return (
    <Link href={href}>
      <div className="group bg-card border border-border rounded-lg p-6 h-full transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:border-accent">
        {icon && (
          <div className="mb-4 text-accent">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-foreground/60 mb-4 text-sm">{description}</p>
        <div className="flex items-center text-accent text-sm font-medium group">
          Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
