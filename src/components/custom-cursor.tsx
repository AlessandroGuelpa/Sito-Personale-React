import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Use MotionValues for performance
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Add a spring physics effect to make it feel smooth
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide default cursor globally when this component is active
    document.body.classList.add("hide-default-cursor");

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // offset by half width to center
      cursorY.set(e.clientY - 16);
    };

    // Detect if hovering over clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        (target.hasAttribute("role") &&
          target.getAttribute("role") === "button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.classList.remove("hide-default-cursor");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Hide cursor on touch devices to avoid issues
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
