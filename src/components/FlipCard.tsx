import * as React from "react";
import {useState} from "react";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import Tag from "@/components/ui/tag.tsx";

interface CardLink {
    label: string;
    url: string;
}

interface FlipCardProps {
    title: string;
    symbol: string;
    subtitle?: string;
    image?: string;
    links?: CardLink[];
    tags?: string[];
    navigateTo?: string;
    children?: React.ReactNode;
    index?: number;
}

const FlipCard = ({ title, symbol, subtitle, image, links, tags, navigateTo, children, index = 0 }: FlipCardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        if (!isFlipped) {
            setIsFlipped(true);
        }
    };

    const handleExplore = () => {
        if (navigateTo) {
            navigate(navigateTo);
        }
    }

    const handleReset = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsFlipped(false);
    };

    return (
        <motion.div
            className="perspective-1000 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            style={{ width: "220px", height: "320px" }}
        >
            <motion.div
                className="relative w-full h-full preserve-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                onClick={handleClick}
            >

                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rounded card-ornament-border card-back-pattern flex items-center justify-center p-3 hover:shadow-[0_0_8px_hsl(42_78%_55%/0.15)] transition-shadow duration-500">
                    <div className="w-full h-full rounded-sm border border-primary/20 flex flex-col items-center justify-center relative overflow-hidden">
                        {/* Tarot ornamental frame */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Outer decorative border */}
                            <rect x="8" y="8" width="184" height="284" rx="2" stroke="hsl(42 60% 40% / 0.3)" strokeWidth="0.5" />
                            <rect x="14" y="14" width="172" height="272" rx="1" stroke="hsl(42 60% 40% / 0.2)" strokeWidth="0.5" strokeDasharray="2 4" />

                            {/* Corner ornaments */}
                            {[[20, 20], [180, 20], [20, 280], [180, 280]].map(([cx, cy], i) => (
                                <g key={i}>
                                    <circle cx={cx} cy={cy} r="6" stroke="hsl(42 78% 55% / 0.3)" strokeWidth="0.5" fill="none" />
                                    <circle cx={cx} cy={cy} r="2" fill="hsl(42 78% 55% / 0.2)" />
                                </g>
                            ))}

                            {/* Central mandala */}
                            <g transform="translate(100, 150)">
                                {/* Outer ring */}
                                <circle r="55" stroke="hsl(42 60% 40% / 0.25)" strokeWidth="0.5" fill="none" strokeDasharray="1 3" />
                                <circle r="45" stroke="hsl(270 40% 45% / 0.2)" strokeWidth="0.5" fill="none" />
                                <circle r="35" stroke="hsl(42 60% 40% / 0.2)" strokeWidth="0.5" fill="none" strokeDasharray="4 2" />

                                {/* Sacred geometry - hexagon */}
                                {[0, 1, 2, 3, 4, 5].map((i) => {
                                    const angle = (i * 60 - 90) * Math.PI / 180;
                                    const nextAngle = ((i + 1) * 60 - 90) * Math.PI / 180;
                                    return (
                                        <line key={i}
                                              x1={Math.cos(angle) * 40} y1={Math.sin(angle) * 40}
                                              x2={Math.cos(nextAngle) * 40} y2={Math.sin(nextAngle) * 40}
                                              stroke="hsl(42 78% 55% / 0.15)" strokeWidth="0.5"
                                        />
                                    );
                                })}

                                {/* Inner star */}
                                {[0, 1, 2, 3, 4, 5].map((i) => {
                                    const angle = (i * 60 - 90) * Math.PI / 180;
                                    return (
                                        <line key={`star-${i}`}
                                              x1={0} y1={0}
                                              x2={Math.cos(angle) * 28} y2={Math.sin(angle) * 28}
                                              stroke="hsl(270 40% 45% / 0.15)" strokeWidth="0.5"
                                        />
                                    );
                                })}

                                {/* Small dots on hexagon vertices */}
                                {[0, 1, 2, 3, 4, 5].map((i) => {
                                    const angle = (i * 60 - 90) * Math.PI / 180;
                                    return <circle key={`dot-${i}`} cx={Math.cos(angle) * 40} cy={Math.sin(angle) * 40} r="1.5" fill="hsl(42 78% 55% / 0.25)" />;
                                })}
                            </g>

                            {/* Top & bottom decorative crescents */}
                            <path d="M80 45 Q100 30 120 45" stroke="hsl(42 60% 40% / 0.25)" strokeWidth="0.5" fill="none" />
                            <path d="M80 255 Q100 270 120 255" stroke="hsl(42 60% 40% / 0.25)" strokeWidth="0.5" fill="none" />

                            {/* Side flourishes */}
                            <path d="M25 100 Q20 150 25 200" stroke="hsl(270 40% 45% / 0.15)" strokeWidth="0.5" fill="none" />
                            <path d="M175 100 Q180 150 175 200" stroke="hsl(270 40% 45% / 0.15)" strokeWidth="0.5" fill="none" />
                        </svg>

                        {/* Center content */}
                        <div className="absolute top-[43%] flex items-center justify-center z-10">
                            <div className="relative flex flex-col items-center">
                                <div className="text-4xl animate-mystic-pulse text-primary/80">
                                    {symbol}
                                </div>
                                <span className="mt-11 font-display text-xs tracking-[0.35em] uppercase text-primary/50">
                                    {title}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Front of card */}
                <div onClick={handleReset} className="absolute inset-0 backface-hidden rotate-y-180 rounded card-ornament-border overflow-hidden">
                    <div className="w-full h-full bg-card flex flex-col">
                        {image && (
                            <div className="w-full h-[130px] overflow-hidden border-b border-border/20">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        <div className={`flex-1 flex overflow-x-hidden flex-col ${image ? 'p-3' : 'p-5'}`}>
                            <div className="text-center mb-2 pb-1.5 border-b border-border/20">
                                <h3 className="font-display text-lg text-primary">{title}</h3>
                            </div>
                            {subtitle && (
                                <p className="text-xs text-muted-foreground mb-2 font-body">{subtitle}</p>
                            )}
                            <div className="flex-1 scrollbar pr-2 overflow-x-hidden text-sm font-body text-secondary-foreground leading-relaxed">
                                {children}
                            </div>

                            {/* Links */}
                            {links && links.length > 0 && (
                                <div className="mt-2 pt-2 border-t border-border/20 flex flex-wrap gap-2">
                                    {links.map((link) => (
                                        <a
                                            key={link.url}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="text-[10px] px-2 py-0.5 border border-primary/30 text-primary/70 font-body tracking-wider uppercase hover:bg-primary/10 hover:text-primary transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            )}

                            {/* Tags */}
                            {tags && tags.length > 0 && (
                                <div className="mt-2 pt-2 border-t border-border/20 flex flex-wrap gap-2">
                                    {tags.map((tag) => (
                                        <Tag tag={tag}></Tag>
                                    ))}
                                </div>
                            )}

                            {navigateTo && (
                                <div className="mt-3 pt-3 border-t border-border/30 text-center">
                                    <span onClick={handleExplore} className="text-xs text-primary/80 font-body tracking-wider uppercase animate-mystic-pulse overflow">
                                        Explorer →
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default FlipCard;
