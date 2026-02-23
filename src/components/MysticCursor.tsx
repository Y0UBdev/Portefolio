import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const MysticCursor = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const springX = useSpring(0, { stiffness: 120, damping: 20 });
    const springY = useSpring(0, { stiffness: 120, damping: 20 });
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
            springX.set(e.clientX);
            springY.set(e.clientY);
        };
        window.addEventListener("mousemove", handler);
        return () => window.removeEventListener("mousemove", handler);
    }, [springX, springY]);
    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            {/* Outer glow */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    x: springX,
                    y: springY,
                    width: 120,
                    height: 120,
                    translateX: "-50%",
                    translateY: "-50%",
                    background: "radial-gradient(circle, hsl(42 78% 55% / 0.08) 0%, hsl(270 40% 45% / 0.04) 40%, transparent 70%)",
                }}
            />
            {/* Inner dot */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    left: pos.x,
                    top: pos.y,
                    width: 6,
                    height: 6,
                    translateX: "-50%",
                    translateY: "-50%",
                    background: "hsl(42 78% 55% / 0.6)",
                    boxShadow: "0 0 8px hsl(42 78% 55% / 0.4), 0 0 20px hsl(270 40% 45% / 0.2)",
                }}
            />
            {/* Trail particles */}
            {[...Array(3)].map((_, i) => {
                const delay = (i + 1) * 0.06;
                return (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            x: springX,
                            y: springY,
                            width: 4 - i,
                            height: 4 - i,
                            translateX: "-50%",
                            translateY: "-50%",
                            background: `hsl(42 78% 55% / ${0.3 - i * 0.08})`,
                            boxShadow: `0 0 ${6 - i * 2}px hsl(270 40% 45% / ${0.15 - i * 0.04})`,
                            transition: `all ${0.15 + delay}s ease-out`,
                        }}
                    />
                );
            })}
        </div>
    );
};
export default MysticCursor;