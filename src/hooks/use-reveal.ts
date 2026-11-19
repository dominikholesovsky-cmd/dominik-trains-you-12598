import { useEffect } from "react";

/**
 * Jemné objevení prvků s atributem `data-reveal` při scrollu.
 * Viditelnost se zapíná atributem `data-visible`, který React nespravuje,
 * takže se při překreslení (např. změně jazyka) neztratí.
 */
export const useReveal = (dependency?: unknown) => {
  useEffect(() => {
    const pending = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-visible])"));
    if (pending.length === 0) return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      pending.forEach((el) => el.setAttribute("data-visible", ""));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    pending.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [dependency]);
};
