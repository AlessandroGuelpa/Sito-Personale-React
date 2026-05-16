import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(false);

  // Use MotionValues for performance (no React re-render on move)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Non attaccare nulla su dispositivi touch
    if (
      typeof window === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    document.body.classList.add("hide-default-cursor");

    let rafId = 0;
    let nextX = 0;
    let nextY = 0;

    const flush = () => {
      rafId = 0;
      cursorX.set(nextX - 16);
      cursorY.set(nextY - 16);
    };

    const moveCursor = (e: MouseEvent) => {
      nextX = e.clientX;
      nextY = e.clientY;
      if (rafId === 0) rafId = requestAnimationFrame(flush);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = Boolean(
        target.closest("a, button, [role='button']"),
      );

      // Aggiorna lo stato (e quindi ri-renderizza) solo se cambia davvero
      if (clickable !== isHoveredRef.current) {
        isHoveredRef.current = clickable;
        setIsHovered(clickable);
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      document.body.classList.remove("hide-default-cursor");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      if (rafId !== 0) cancelAnimationFrame(rafId);
    };
  }, [cursorX, cursorY]);

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <motion.div
      animate={{
        scale: isHovered ? 2 : 1,
        opacity: 1,
      }}
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block"
      initial={{ scale: 0, opacity: 0 }}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        backgroundColor: "white",
      }}
      transition={{
        scale: { type: "spring", stiffness: 300, damping: 20 },
      }}
    />
  );
};
