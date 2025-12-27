import { motion } from "framer-motion";
import { useMouseTracking } from "@/hooks/useMouseTracking";

interface MouseGlowProps {
  color?: string;
  size?: number;
  opacity?: number;
}

const MouseGlow = ({ color = "hsl(var(--gold))", size = 200, opacity = 0.15 }: MouseGlowProps) => {
  const mouse = useMouseTracking();

  return (
    <motion.div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" style={{ opacity }}>
      <motion.div
        className="absolute rounded-full"
        animate={{
          x: mouse.x - size / 2,
          y: mouse.y - size / 2,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        }}
      />
    </motion.div>
  );
};

export default MouseGlow;
