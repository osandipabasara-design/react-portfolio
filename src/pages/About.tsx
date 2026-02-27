import { Code2, Palette, Zap, User } from "lucide-react";

const skills = [
  { icon: Code2, label: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
  { icon: Palette, label: "Design", items: ["Figma", "UI/UX", "Responsive Design", "Animation"] },
  { icon: Zap, label: "Tools", items: ["Git", "VS Code", "Vite", "Docker"] },
];

const About = () => {
  return (
    <section className="container py-20">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4 animate-fade-up">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">About Me</p>
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">
            Crafting digital experiences<span className="text-gradient">.</span>
          </h1>
        </div>

        {/* Bio */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start animate-fade-up [animation-delay:100ms]">
          <div className="flex items-center justify-center">
            <div className="relative h-48 w-48 rounded-2xl bg-secondary flex items-center justify-center glow-amber">
              <User size={64} className="text-primary" />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate web developer with a love for clean code and beautiful interfaces.
              I specialize in building modern web applications using the latest technologies.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              With a strong foundation in frontend development, I create responsive,
              accessible, and performant web experiences that delight users and solve real problems.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-8 animate-fade-up [animation-delay:200ms]">
          <h2 className="font-heading text-2xl font-semibold line-accent pb-4">Skills & Technologies</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.label} className="rounded-xl border border-border bg-card p-6 space-y-4 transition-colors hover:border-primary/30">
                <div className="flex items-center gap-3">
                  <skill.icon size={20} className="text-primary" />
                  <h3 className="font-heading font-semibold">{skill.label}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
