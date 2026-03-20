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
      <div className="bg-card border border-border rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all h-full">
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
