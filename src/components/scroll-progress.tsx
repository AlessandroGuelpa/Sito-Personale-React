import { useEffect, useRef } from "react";

export const ScrollProgress = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const progress = progressRef.current;
      if (!progress) return;

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
      progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={progressRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 right-0 top-0 z-50 h-1 origin-left"
      style={{
        background: "linear-gradient(to right, #7c3aed, #e879f9)",
        transform: "scaleX(0)",
      }}
    />
  );
};
