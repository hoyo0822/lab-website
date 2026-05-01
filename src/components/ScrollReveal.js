'use client';
import { useEffect, useRef } from "react";

export default function ScrollReveal({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timerRef.current = setTimeout(() => {
            el.classList.add("sr-visible");
          }, delay);
        } else {
          clearTimeout(timerRef.current);
          el.classList.remove("sr-visible");
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timerRef.current);
    };
  }, [delay]);

  return (
    <div ref={ref} className="sr-hidden" style={style}>
      {children}
    </div>
  );
}
