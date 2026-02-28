import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      animate={{ background: "linear-gradient(to right, #7c3aed, #e879f9)" }}
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
      style={{ scaleX }}
      // Choose colors matching the site's branding (violet to fuchsia)
      initial={{ background: "linear-gradient(to right, #7c3aed, #e879f9)" }}
    />
  );
};
