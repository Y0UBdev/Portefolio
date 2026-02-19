import FlipCard from "@/components/FlipCard";
import MysticBackground from "@/components/MysticBackground";
import { motion } from "framer-motion";
import {homeCards} from "@/config/home.config.ts";
import Tag from "@/components/ui/tag.tsx";

const Index = () => {
    const Presentation = homeCards.Presentation;
    const Projects = homeCards.Projects;
    const Skills = homeCards.Skills;
    const Contacts = homeCards.Contacts;

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
                <h1 className="text-4xl md:text-5xl font-display font-bold text-gold-gradient mb-2 tracking-wide">Portfolio</h1>
                <p className="text-muted-foreground font-body text-sm tracking-[0.2em] uppercase">
                    Retournez les cartes pour découvrir
                </p>
            </motion.div>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 relative z-10 px-4">
                <FlipCard title={Presentation.title} tags={Presentation.content.badges} symbol={Presentation.symbol} index={0}>
                    <div className="space-y-2">
                        <p className="text-foreground font-display text-base italic">"{Presentation.content.quote}"</p>
                        <div className="w-8 h-[1px] bg-primary/40" />
                        <p className="text-muted-foreground text-xs leading-relaxed">
                            {Presentation.content.description}
                        </p>
                    </div>
                </FlipCard>

                <FlipCard title={Projects.title} symbol={Projects.symbol} navigateTo="/projects" index={1}>
                    <div className="space-y-2">
                        <p className="text-muted-foreground text-xs leading-relaxed">
                            {Projects.description}
                        </p>
                        <div className="space-y-1.5 mt-3">
                            {Projects.preview.map((p) => (
                                <div key={p} className="flex items-center gap-2 text-xs text-secondary-foreground">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                  {p}
                                </div>
                            ))}
                        </div>
                    </div>
                </FlipCard>

                <FlipCard title={Skills.title} symbol={Skills.symbol} index={2}>
                    <div className="space-y-3">
                    {Skills.categories.map((cat) => (
                        <div key={cat.label}>
                            <span className="text-xs text-primary font-display">{cat.label}</span>
                            <p className="text-[11px] text-muted-foreground">{cat.skills}</p>
                        </div>))
                    }
                    </div>
                </FlipCard>

                <FlipCard title={Contacts.title} links={Contacts.links} symbol={Contacts.symbol} index={3}>
                    <div className="space-y-3">
                        <p className="text-muted-foreground text-xs leading-relaxed">
                            Envie de collaborer ? Contactez-moi pour donner vie à vos projets.
                        </p>
                        <div className="space-y-2 mt-3">
                            {Contacts.links.map((value) => (
                                <div className="text-xs">
                                    <span className="text-primary/70">{value.label}</span>
                                    <p className="text-secondary-foreground">{value.display === undefined ? value.url : value.display}</p>
                                </div>))
                            }
                        </div>
                    </div>
                </FlipCard>
            </div>
        </div>
    );
};

export default Index;
