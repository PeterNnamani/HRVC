interface StatsCardProps {
  number: string;
  label: string;
  description?: string;
}

export function StatsCard({ number, label, description }: StatsCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 text-center">
      <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
        {number}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{label}</h3>
      {description && (
        <p className="text-sm text-foreground/60">{description}</p>
      )}
    </div>
  );
}
