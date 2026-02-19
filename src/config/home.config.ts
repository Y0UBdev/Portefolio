export const homeCards = {
    Presentation:  {
        title: "Présentation",
        symbol: "◈",
        content: {
            quote: "Artisan du Clean Code et des principes SOLID",
            description: [
                "Développeur full-stack passionné par le design et la qualité du code. " +
                "Mon objectif est de produire un code clair, lisible et durable, " +
                "facilitant son évolution, son extensibilité et son adaptabilité."
            ],
            badges: ["Junior", "Game Dev", "Web", "Scripting", "En étude", "Freelance"]
        }
    },

    Projects: {
        title: "Projets",
        description:"Découvrez mes réalisations : applications web, expériences interactives et créations innovantes.",
        symbol: "⬡",
        navigateTo: "/projects",
        preview: [
            "App E-commerce",
            "Dashboard Analytics",
            "Portfolio Créatif",
            "API Platform"
        ]
    },

    Skills: {
        title: "Compétences",
        symbol: "✦",
        categories: [
            { label: "Frontend", skills: "React, Vue, TypeScript" },
            { label: "Backend", skills: "Node.js, Python, Go" },
            { label: "Design", skills: "Figma, UI/UX, Motion" },
            { label: "DevOps", skills: "Docker, AWS, CI/CD" },
        ]
    },

    Contacts: {
        title: "Contact",
        symbol: "◇",
        links: [
            { label: "Email", url: "mailto:boukhanoucheayoubpro@gmail.com", display:"boukhanoucheayoubpro@gmail.com"},
            { label: "GitHub", url: "https://github.com/Y0UBdev" },
            { label: "LinkedIn", url: "https://www.linkedin.com/in/ayoub-b-64433232b/" },
        ]
    }
};