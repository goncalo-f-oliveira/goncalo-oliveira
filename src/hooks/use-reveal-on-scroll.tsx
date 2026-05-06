import { useEffect } from "react";

type RevealOptions = {
  selector?: string;
  rootMargin?: string;
  threshold?: number;
};

export function useRevealOnScroll({
  selector = ".reveal",
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.12,
}: RevealOptions = {}) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, rootMargin, threshold]);
}
