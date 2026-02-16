"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  bgClassName?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  bgClassName = "",
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 md:py-28 ${bgClassName} ${className}`}
    >
      <div
        className={`mx-auto max-w-6xl px-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
