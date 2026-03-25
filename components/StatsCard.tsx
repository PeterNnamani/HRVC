"use client";
import { useEffect, useRef, useState } from "react";

interface StatsCardProps {
  number: string;
  label: string;
  description?: string;
}

export function StatsCard({ number, label, description }: StatsCardProps) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  const target = parseInt(number.replace(/[^0-9]/g, ""));

  // 👇 Detect when element enters screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // 50% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // 👇 Run count when visible
  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [visible, target]);

  return (
    <div
      ref={ref}
      className="bg-card border border-border rounded-lg p-6 text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
        {count}
        {number.replace(/[0-9,]/g, "")}
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2">
        {label}
      </h3>

      {description && (
        <p className="text-sm text-foreground/60">{description}</p>
      )}
    </div>
  );
}