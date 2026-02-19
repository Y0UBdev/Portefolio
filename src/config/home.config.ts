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
        title: "Expériences",
        description:"Découvrez mes réalisations : applications web, expériences interactives et créations innovantes.",
        symbol: "⬡",
        navigateTo: "/projects",
        preview: [
            "Pathfinding Algorithm",
            "Roblox Game developer",
            "Conway's Game of Life",
            "Web Scraper",
            "..."
        ]
    },

    Skills: {
        title: "Compétences",
        symbol: "✦",
        categories: [
            { label: "Frontend", skills: "Html/Css, React, TypeScript, Tailwindcss" },
            { label: "Backend", skills: "Laravel, Flask, C#" },
            { label: "Game Dev", skills: "Roblox Studio, Lua" },
            { label: "Design & UX", skills: "Figma" },
            { label: "DevOps & Infrastructure", skills: "Docker, CI/CD, Portainer" },
            { label: "Build & Tooling", skills: "Gradle, Maven, Vite, npm, node" },
            { label: "Languages", skills: "Javascript, Python, Java, Php" },
            { label: "Versioning & Collaboration", skills: "Git, Github, Gitlab, Jira, Linear, Notion, Trello" },
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