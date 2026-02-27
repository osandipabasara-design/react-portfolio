import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <section className="container flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20">
      <div className="max-w-3xl space-y-8">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary animate-fade-up">
          Hello, I'm
        </p>
        <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight sm:text-7xl animate-fade-up [animation-delay:100ms]">
          Your Name<span className="text-gradient">.</span>
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground max-w-xl animate-fade-up [animation-delay:200ms]">
          A passionate developer crafting beautiful, performant web experiences.
          I turn ideas into elegant digital solutions.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-up [animation-delay:300ms]">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition-all hover:glow-amber hover:scale-105"
          >
            View Projects <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-heading text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Decorative element */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>
    </section>
  );
};

export default Index;
