import {
    Braces,
    Cloud,
    Database,
    Layers3,
    Network,
    ShieldCheck,
} from "lucide-react";

const skillGroups = [
    {
        title: "Languages",
        icon: Braces,
        skills: ["C++", "Java", "Python", "JavaScript", "TypeScript", "Bash / Shell", "HTML", "CSS"],
    },
    {
        title: "Frameworks & Libraries",
        icon: Layers3,
        skills: [
            "Node.js",
            "Express.js",
            "React",
            "Next.js",
            "Spring Boot",
            "Tailwind CSS",
            "Redux",
            "Chakra UI",
            "Material UI",
            "Socket.IO",
        ],
    },
    {
        title: "Databases",
        icon: Database,
        skills: ["PostgreSQL", "MongoDB"],
    },
    {
        title: "APIs",
        icon: Network,
        skills: ["REST", "GraphQL"],
    },
    {
        title: "DevOps & Cloud",
        icon: Cloud,
        skills: [
            "Azure Services",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Linux & Networking",
            "GitHub Actions CI/CD",
            "Azure Monitor",
            "Log Analytics",
        ],
    },
    {
        title: "Security & Deployment",
        icon: ShieldCheck,
        skills: [
            "RBAC",
            "Azure AD",
            "Secrets Management",
            "Access Control",
            "Monolith",
            "Microservices",
            "IaC",
        ],
    },
];

export default function Skills() {
    return (
        <section className="w-full px-6 py-24 text-white sm:px-10" aria-labelledby="skills-heading">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 text-center">
                    <h2 id="skills-heading" className="text-5xl font-semibold">
                        Skills
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
                        Technologies and practices I use to build, ship, and secure software.
                    </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map(({ title, icon: Icon, skills }) => (
                        <article
                            key={title}
                            className="rounded-2xl border border-white/10 bg-[#1f243f]/80 p-6 shadow-lg shadow-black/10 transition-colors duration-300 hover:border-blue-300/40"
                        >
                            <div className="mb-5 flex items-center gap-3">
                                <span className="rounded-xl bg-blue-400/10 p-2.5 text-blue-300">
                                    <Icon size={22} aria-hidden="true" />
                                </span>
                                <h3 className="text-xl font-semibold">{title}</h3>
                            </div>
                            <ul className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-200"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
