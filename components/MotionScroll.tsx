'use client';

import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';
import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  staggerItem,
  scrollViewport,
  scrollEase,
} from '@/lib/animations';

export type RevealVariant = 'up' | 'down' | 'left' | 'right' | 'scale';

const variantSets: Record<RevealVariant, Variants> = {
  up: fadeInUp,
  down: fadeInDown,
  left: fadeInLeft,
  right: fadeInRight,
  scale: scaleIn,
};

function variantsWithDelay(variant: RevealVariant, delay: number): Variants {
  const base = variantSets[variant];
  const vis = base.visible as Record<string, unknown>;
  const prevTransition =
    vis && typeof vis === 'object' && 'transition' in vis && vis.transition && typeof vis.transition === 'object'
      ? (vis.transition as Record<string, unknown>)
      : {};
  return {
    hidden: base.hidden,
    visible: {
      ...vis,
      transition: {
        duration: 0.55,
        ease: scrollEase,
        ...prevTransition,
        delay,
      },
    },
  };
}

type RevealBase = {
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

export function Reveal({
  variant = 'up',
  delay = 0,
  className,
  children,
  ...rest
}: RevealBase & Omit<HTMLMotionProps<'div'>, 'children' | 'variants' | 'initial' | 'whileInView' | 'viewport'>) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      variants={variantsWithDelay(variant, delay)}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function RevealSection({
  variant = 'up',
  delay = 0,
  className,
  children,
  ...rest
}: RevealBase & Omit<HTMLMotionProps<'section'>, 'children' | 'variants' | 'initial' | 'whileInView' | 'viewport'>) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      variants={variantsWithDelay(variant, delay)}
      className={className}
      {...rest}
    >
      {children}
    </motion.section>
  );
}

export function RevealArticle({
  variant = 'up',
  delay = 0,
  className,
  children,
  ...rest
}: RevealBase & Omit<HTMLMotionProps<'article'>, 'children' | 'variants' | 'initial' | 'whileInView' | 'viewport'>) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      variants={variantsWithDelay(variant, delay)}
      className={className}
      {...rest}
    >
      {children}
    </motion.article>
  );
}

export function RevealStagger({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}
