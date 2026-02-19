import FlipCard from "@/components/FlipCard";
import MysticBackground from "@/components/MysticBackground";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background py-12">
      <MysticBackground />

      {/* Title */}
      <motion.div
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold text-gold-gradient mb-2 tracking-wide">
          Portfolio
        </h1>
        <p className="text-muted-foreground font-body text-sm tracking-[0.2em] uppercase">
          Retournez les cartes pour découvrir
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 relative z-10 px-4">
        <FlipCard title="Présentation" symbol="◈" index={0}>
          <div className="space-y-2">
            <p className="text-foreground font-display text-base italic">"Créateur d'expériences digitales"</p>
            <div className="w-8 h-[1px] bg-primary/40" />
            <p className="text-muted-foreground text-xs leading-relaxed">
              Développeur fullstack passionné par le design et l'innovation.
              Je transforme des idées en interfaces élégantes et performantes.
            </p>
            <p className="text-muted-foreground text-xs leading-relaxed">
              React · TypeScript · Node.js · Design UI/UX
            </p>
            <div className="pt-2 flex gap-2">
              <span className="text-[10px] px-2 py-1 rounded-full border border-primary/30 text-primary/70">3+ ans XP</span>
              <span className="text-[10px] px-2 py-1 rounded-full border border-primary/30 text-primary/70">Freelance</span>
            </div>
          </div>
        </FlipCard>

        <FlipCard title="Projets" symbol="⬡" navigateTo="/projects" index={1}>
          <div className="space-y-2">
            <p className="text-muted-foreground text-xs leading-relaxed">
              Découvrez mes réalisations : applications web, expériences interactives et créations innovantes.
            </p>
            <div className="space-y-1.5 mt-3">
              {["App E-commerce", "Dashboard Analytics", "Portfolio Créatif", "API Platform"].map((p) => (
                <div key={p} className="flex items-center gap-2 text-xs text-secondary-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  {p}
                </div>
              ))}
            </div>
          </div>
        </FlipCard>

        <FlipCard title="Compétences" symbol="✦" index={2}>
          <div className="space-y-3">
            {[
              { label: "Frontend", skills: "React, Vue, TypeScript" },
              { label: "Backend", skills: "Node.js, Python, Go" },
              { label: "Design", skills: "Figma, UI/UX, Motion" },
              { label: "DevOps", skills: "Docker, AWS, CI/CD" },
            ].map((cat) => (
              <div key={cat.label}>
                <span className="text-xs text-primary font-display">{cat.label}</span>
                <p className="text-[11px] text-muted-foreground">{cat.skills}</p>
              </div>
            ))}
          </div>
        </FlipCard>

        <FlipCard title="Contact" symbol="◇" index={3}>
          <div className="space-y-3">
            <p className="text-muted-foreground text-xs leading-relaxed">
              Envie de collaborer ? Contactez-moi pour donner vie à vos projets.
            </p>
            <div className="space-y-2 mt-3">
              <div className="text-xs">
                <span className="text-primary/70">Email</span>
                <p className="text-secondary-foreground">hello@monportfolio.dev</p>
              </div>
              <div className="text-xs">
                <span className="text-primary/70">GitHub</span>
                <p className="text-secondary-foreground">github.com/monpseudo</p>
              </div>
              <div className="text-xs">
                <span className="text-primary/70">LinkedIn</span>
                <p className="text-secondary-foreground">linkedin.com/in/monpseudo</p>
              </div>
            </div>
          </div>
        </FlipCard>
      </div>
    </div>
  );
};

export default Index;
