'use client';

import { useEffect, useState, useMemo } from 'react';

const Heart = ({ style }: { style: React.CSSProperties }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8 text-accent/70 absolute animate-float-up"
    style={style}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export default function FloatingHearts() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const hearts = useMemo(() => {
    if (!isMounted) return [];
    return Array.from({ length: 20 }).map((_, i) => {
      const style = {
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 5 + 8}s`,
        animationDelay: `${Math.random() * 5}s`,
        transform: `scale(${Math.random() * 0.5 + 0.5})`,
      };
      return <Heart key={i} style={style} />;
    });
  }, [isMounted]);

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden -z-10"
      aria-hidden="true"
    >
      {hearts}
    </div>
  );
}
