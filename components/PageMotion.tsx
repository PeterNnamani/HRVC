'use client';

import { usePathname } from 'next/navigation';

/**
 * Wraps route content so subtree remounts on navigation.
 * Scroll-based motion lives in {@link MotionScroll} (Reveal*, etc.), not here.
 */
export function PageMotion({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="w-full min-h-0">
      {children}
    </div>
  );
}
