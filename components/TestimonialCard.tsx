import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating?: number;
}

export function TestimonialCard({
  quote,
  author,
  role,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-accent text-accent" />
        ))}
      </div>
      <blockquote className="text-foreground italic mb-4 text-balance">
        "{quote}"
      </blockquote>
      <div>
        <p className="font-semibold text-foreground">{author}</p>
        <p className="text-sm text-foreground/60">{role}</p>
      </div>
    </div>
  );
}
