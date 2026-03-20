'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  description?: string;
}

export function FAQ({ items, title, description }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      {title && (
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-card border border-border rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
              aria-expanded={openId === item.id}
            >
              <span className="font-semibold text-foreground pr-4">{item.question}</span>
              <ChevronDown
                size={20}
                className={`text-accent flex-shrink-0 transition-transform ${
                  openId === item.id ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openId === item.id && (
              <div className="px-6 pb-6 text-foreground/80 border-t border-border">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
