import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store built with React and Stripe integration for seamless payments.",
    tags: ["React", "TypeScript", "Stripe", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity tool with drag-and-drop, real-time updates, and team collaboration features.",
    tags: ["React", "Firebase", "DnD Kit"],
    github: "#",
    live: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather visualization with interactive charts and location-based forecasts.",
    tags: ["TypeScript", "Recharts", "API"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description: "This very portfolio — a modern, responsive site showcasing my work and skills.",
    tags: ["React", "Tailwind CSS", "Vite"],
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section className="container py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 animate-fade-up">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">My Work</p>
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">
            Featured projects<span className="text-gradient">.</span>
          </h1>
          <p className="text-muted-foreground max-w-lg">
            A collection of projects that showcase my skills and passion for building great software.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group rounded-xl border border-border bg-card p-6 sm:p-8 transition-all hover:border-primary/30 hover:glow-amber animate-fade-up"
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-3 flex-1">
                  <h3 className="font-heading text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                    <Github size={18} />
                  </a>
                  <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live demo">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
