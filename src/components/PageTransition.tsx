"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // On initial load or route change, trigger fade in
    if (prevPathname.current !== pathname) {
      setIsVisible(false);
      // Force a reflow before setting visible to true so the transition replays
      const frame = requestAnimationFrame(() => {
        setIsVisible(true);
      });
      prevPathname.current = pathname;
      return () => cancelAnimationFrame(frame);
    } else {
      setIsVisible(true);
    }
  }, [pathname]);

  return (
    <div
      className={`transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

