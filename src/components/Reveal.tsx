import type { CSSProperties, ReactNode } from "react";

// small lead-in so the first element's fade isn't already over by first paint
const BASE_DELAY_MS = 150;
// each step is one "line" of the entrance; index may be fractional for tighter
// stagger inside long lists (e.g. 2 + i * 0.5)
const STEP_MS = 90;
const MAX_DELAY_MS = 1000;

export function revealDelay(index = 0): CSSProperties {
  return {
    animationDelay: `${Math.min(
      BASE_DELAY_MS + Math.round(index * STEP_MS),
      MAX_DELAY_MS,
    )}ms`,
  };
}

/**
 * Spread onto an existing element when wrapping it in a <Reveal> would break
 * the layout (flex/grid children, headless ui `as` elements, ...).
 */
export function revealProps(index = 0, className?: string) {
  return {
    className: className ? `reveal ${className}` : "reveal",
    style: revealDelay(index),
  };
}

type RevealProps = {
  index?: number;
  className?: string;
  children: ReactNode;
};

export function Reveal({ index = 0, className, children }: RevealProps) {
  return <div {...revealProps(index, className)}>{children}</div>;
}
