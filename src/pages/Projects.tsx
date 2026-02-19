import FlipCard from "@/components/FlipCard";
import MysticBackground from "@/components/MysticBackground";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Tag from "@/components/ui/Tag.tsx";

const projects = [
    {
        title: "E-Commerce",
        symbol: "◆",
        description: "Plateforme e-commerce complète avec panier, paiement Stripe et dashboard admin. React, Node.js, PostgreSQL.",
        tech: ["React", "Stripe", "Node.js"],
    },
    {
        title: "Dashboard",
        symbol: "◈",
        description: "Dashboard analytics temps réel avec graphiques interactifs et gestion de données complexes.",
        tech: ["TypeScript", "D3.js", "WebSocket"],
    },
    {
        title: "App Mobile",
        symbol: "⬡",
        description: "Application mobile cross-platform de gestion de tâches avec synchronisation cloud.",
        tech: ["React Native", "Firebase", "Redux"],
    },
    {
        title: "API Platform",
        symbol: "✦",
        description: "Architecture microservices RESTful avec authentification JWT et documentation OpenAPI.",
        tech: ["Go", "Docker", "K8s"],
    },
    {
        title: "Portfolio 3D",
        symbol: "◇",
        description: "Portfolio interactif avec animations 3D, WebGL et expériences immersives.",
        tech: ["Three.js", "GSAP", "WebGL"],
    },
    {
        title: "Chat App",
        symbol: "⟐",
        description: "Application de messagerie temps réel avec chiffrement de bout en bout et appels vidéo.",
        tech: ["Socket.io", "WebRTC", "Redis"],
    },
];

const Projects = () => {
    const navigate = useNavigate();

    return (
        <div className="inset-0 flex flex-col items-center justify-center bg-background">
            <MysticBackground />

            <motion.div
                className="text-center mt-10 mb-10 z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <button
                  onClick={() => navigate("/")}
                  className="absolute left-5 top-5 text-muted-foreground hover:text-primary transition-colors text-xs font-body tracking-wider uppercase mb-4 inline-block"
                >← Retour</button>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-gold-gradient tracking-wide">
                  Mes Projets
                </h1>
                <p className="text-muted-foreground font-body text-sm tracking-[0.2em] uppercase mt-2">Retournez pour découvrir chaque projet</p>
            </motion.div>

            {/* Project cards */}
            <div className="flex flex-wrap items-center justify-center gap-5 md:gap-6 relative z-10 px-4 mb-7 max-w-5xl">
                {projects.map((project, i) => (
                    <FlipCard key={project.title} title={project.title} symbol={project.symbol} index={i}>
                        <div className="space-y-2">
                            <p className="text-muted-foreground text-xs leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mt-3">
                                {project.tech.map((t) => (<Tag tag={t}/>))}
                            </div>
                        </div>
                    </FlipCard>
                ))}
            </div>
        </div>
    );
};

export default Projects;
