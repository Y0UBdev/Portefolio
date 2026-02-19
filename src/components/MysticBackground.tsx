import { motion } from "framer-motion";

const MysticBackground = () => {
    const rings = [
        { r: 50, stroke: "hsl(42 78% 55%)", width: 0.15, opacity: 0.40, dash: "2 4", duration: 120, dir: 1 },
        { r: 45, stroke: "hsl(270 40% 55%)", width: 0.12, opacity: 0.29, dash: "1 3", duration: 90, dir: -1 },
        { r: 40, stroke: "hsl(42 78% 55%)", width: 0.1, opacity: 0.36, dash: "0.5 2", duration: 70, dir: 1 },
        { r: 35, stroke: "hsl(270 40% 55%)", width: 0.08, opacity: 0.35, dash: "3 2 1 2", duration: 55, dir: -1 },
        { r: 30, stroke: "hsl(42 78% 55%)", width: 0.1, opacity: 0.37, dash: "0.3 1.5", duration: 45, dir: 1 },
        { r: 25, stroke: "hsl(270 40% 55%)", width: 0.06, opacity: 0.34, dash: "1 1", duration: 35, dir: -1 },
    ];

    const symbols = ["☽", "✦", "☉", "✧", "☾", "⊕", "△", "☿"];
    const symbolRadius = 70; // agrandi

    // Tick marks
    const ticks = Array.from({ length: 72 }).map((_, i) => {
        const angle = (i * 5 * Math.PI) / 180;
        const inner = 56; // 37.5 * 1.5
        const outer = i % 6 === 0 ? 59 : 57.75;
        return {
            x1: 50 + Math.cos(angle) * inner,
            y1: 50 + Math.sin(angle) * inner,
            x2: 50 + Math.cos(angle) * outer,
            y2: 50 + Math.sin(angle) * outer,
            major: i % 6 === 0,
        };
    });

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Central radial glow */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full"
                style={{
                    background:
                        "radial-gradient(circle, hsl(270 40% 45% / 0.08) 0%, hsl(42 78% 55% / 0.04) 30%, transparent 65%)",
                }}
                animate={{ scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* SVG mystic circle */}
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="hsl(42 78% 55%)" stopOpacity="0.1" />
                        <stop offset="40%" stopColor="hsl(270 40% 55%)" stopOpacity="0.04" />
                        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </radialGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="0.3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Center glow fill */}
                <circle cx="50" cy="50" r={60} fill="url(#centerGlow)" />

                {/* Rotating rings */}
                {rings.map((ring, i) => (
                    <motion.circle
                        key={`ring-${i}`}
                        cx="50"
                        cy="50"
                        r={ring.r}
                        fill="none"
                        stroke={ring.stroke}
                        strokeWidth={ring.width}
                        strokeOpacity={ring.opacity}
                        strokeDasharray={ring.dash}
                        filter="url(#glow)"
                        animate={{ rotate: 360 * ring.dir }}
                        transition={{ duration: ring.duration, repeat: Infinity, ease: "linear" }}
                        style={{ transformOrigin: "50% 50%" }}
                    />
                ))}

                {/* Tick marks around outer ring */}
                {ticks.map((t, i) => (
                    <motion.line
                        key={`tick-${i}`}
                        x1={t.x1}
                        y1={t.y1}
                        x2={t.x2}
                        y2={t.y2}
                        stroke="hsl(42 78% 55%)"
                        strokeWidth={t.major ? 0.12 : 0.06}
                        strokeOpacity={t.major ? 0.2 : 0.08}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: t.major ? [0.1, 0.25, 0.1] : 1 }}
                        transition={
                            t.major
                                ? { duration: 4, delay: i * 0.1, repeat: Infinity, ease: "easeInOut" }
                                : { duration: 1, delay: i * 0.02 }
                        }
                    />
                ))}

                {/* Sacred geometry — inner hexagram */}
                <motion.polygon
                    points="50,28 54.5,39 66,39 56.5,46 60,57 50,50 40,57 43.5,46 34,39 45.5,39"
                    fill="none"
                    stroke="hsl(42 78% 55%)"
                    strokeWidth="0.08"
                    strokeOpacity="0.1"
                    filter="url(#glow)"
                    animate={{ rotate: [0, 360], opacity: [0.06, 0.12, 0.06] }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "50% 50%" }}
                />

                {/* Inner triangle */}
                <motion.polygon
                    points="50,32 60,52 40,52"
                    fill="none"
                    stroke="hsl(270 40% 55%)"
                    strokeWidth="0.08"
                    strokeOpacity="0.08"
                    animate={{ rotate: [0, -360], opacity: [0.04, 0.1, 0.04] }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "50% 50%" }}
                />
                <motion.polygon
                    points="50,52 40,35 60,35"
                    fill="none"
                    stroke="hsl(270 40% 55%)"
                    strokeWidth="0.06"
                    strokeOpacity="0.07"
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "50% 50%" }}
                />

                {/* Center eye */}
                <motion.g
                    style={{ transformOrigin: "50% 50%" }}
                    animate={{ opacity: [0.08, 0.2, 0.08] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <path
                        d="M 46 50 Q 50 45 54 50 Q 50 55 46 50"
                        fill="none"
                        stroke="hsl(42 78% 55%)"
                        strokeWidth="0.12"
                        strokeOpacity="0.25"
                        filter="url(#glow)"
                    />
                    <circle
                        cx="50"
                        cy="50"
                        r="1"
                        fill="hsl(42 78% 55%)"
                        fillOpacity="0.25"
                        filter="url(#glow)"
                    />
                </motion.g>

                {/* Symbols around the circle */}
                {symbols.map((sym, i) => {
                    const angle = (i * 45 - 90) * (Math.PI / 180);
                    const x = 50 + Math.cos(angle) * symbolRadius;
                    const y = 50 + Math.sin(angle) * symbolRadius;
                    return (
                        <motion.text
                            key={`sym-${i}`}
                            x={x}
                            y={y}
                            textAnchor="middle"
                            dominantBaseline="central"
                            fill="hsl(42 78% 55%)"
                            fillOpacity="0.15"
                            fontSize="2"
                            filter="url(#glow)"
                            animate={{ opacity: [0.08, 0.2, 0.08] }}
                            transition={{
                                duration: 5,
                                delay: i * 0.6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            {sym}
                        </motion.text>
                    );
                })}
            </svg>

            {/* Vignette */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at center, transparent 30%, hsl(230 25% 7% / 0.7) 100%)",
                }}
            />
        </div>
    );
};

export default MysticBackground;
