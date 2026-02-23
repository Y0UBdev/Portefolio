import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

interface Sparkle {
    id: number;
    x: number;
    y: number;
    size: number;
    symbol: string;
}

const SYMBOLS = ["✦", "☽", "✧", "◇", "⊕", "△", "☿", "☉"];

const MysticCursor = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);
    const idRef = useRef(0);
    const lastSparkle = useRef(0);

    const springX = useSpring(0, { stiffness: 90, damping: 18 });
    const springY = useSpring(0, { stiffness: 90, damping: 18 });

    const trailX = useSpring(0, { stiffness: 40, damping: 25 });
    const trailY = useSpring(0, { stiffness: 40, damping: 25 });

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
            springX.set(e.clientX);
            springY.set(e.clientY);
            trailX.set(e.clientX);
            trailY.set(e.clientY);

            const now = Date.now();
            if (now - lastSparkle.current > 80) {
                lastSparkle.current = now;
                const id = idRef.current++;
                const symbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
                const offsetX = (Math.random() - 0.5) * 40;
                const offsetY = (Math.random() - 0.5) * 40;
                setSparkles((prev) => [
                    ...prev.slice(-12),
                    { id, x: e.clientX + offsetX, y: e.clientY + offsetY, size: Math.random() * 8 + 6, symbol },
                ]);
                setTimeout(() => {
                    setSparkles((prev) => prev.filter((s) => s.id !== id));
                }, 5200);
            }
        };
        window.addEventListener("mousemove", handler);
        return () => window.removeEventListener("mousemove", handler);
    }, [springX, springY, trailX, trailY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            {/* Rotating mystic ring */}
            <motion.div
                className="absolute"
                style={{
                    x: springX,
                    y: springY,
                    width: 50,
                    height: 50,
                    translateX: "-50%",
                    translateY: "-50%",
                    background:
                        "radial-gradient(circle, hsl(42 78% 55% / 0.07) 0%, hsl(270 40% 45% / 0.04) 50%, transparent 75%)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
                <svg viewBox="0 0 50 50" className="w-full h-full">
                    <circle
                        cx="25"
                        cy="25"
                        r="22"
                        fill="none"
                        stroke="hsl(42 78% 55%)"
                        strokeWidth="0.3"
                        strokeOpacity="0.15"
                        strokeDasharray="2 3"
                    />
                    <circle
                        cx="25"
                        cy="25"
                        r="18"
                        fill="none"
                        stroke="hsl(270 40% 55%)"
                        strokeWidth="0.2"
                        strokeOpacity="0.1"
                        strokeDasharray="1 2"
                    />
                </svg>
            </motion.div>

            {/* Inner glowing dot */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    left: pos.x,
                    top: pos.y,
                    width: 5,
                    height: 5,
                    translateX: "-50%",
                    translateY: "-50%",
                    background: "hsl(42 78% 55% / 0.7)",
                    boxShadow:
                        "0 0 6px hsl(42 78% 55% / 0.5), 0 0 15px hsl(42 78% 55% / 0.2), 0 0 30px hsl(270 40% 45% / 0.15)",
                }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Sparkle runes */}
            {sparkles.map((s) => (
                <motion.div
                    key={s.id}
                    className="absolute font-display select-none"
                    style={{
                        left: s.x,
                        top: s.y,
                        fontSize: s.size,
                        color: "hsl(42 78% 55%)",
                        textShadow: "0 0 6px hsl(42 78% 55% / 0.4), 0 0 12px hsl(270 40% 45% / 0.2)",
                        translateX: "-50%",
                        translateY: "-50%",
                    }}
                    initial={{ opacity: 0.6, scale: 0.5, rotate: Math.random() * 360 }}
                    animate={{ opacity: 0, scale: 1.2, y: -20 - Math.random() * 20, rotate: Math.random() * 360 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    {s.symbol}
                </motion.div>
            ))}

            {/* Trail particles */}
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={`trail-${i}`}
                    className="absolute rounded-full"
                    style={{
                        x: springX,
                        y: springY,
                        width: 3 - i * 0.5,
                        height: 3 - i * 0.5,
                        translateX: "-50%",
                        translateY: "-50%",
                        background: `hsl(42 78% 55% / ${0.25 - i * 0.05})`,
                        boxShadow: `0 0 ${4 - i}px hsl(270 40% 45% / ${0.1 - i * 0.02})`,
                        transition: `all ${0.2 + i * 0.08}s ease-out`,
                    }}
                />
            ))}
        </div>
    );
};

export default MysticCursor;
