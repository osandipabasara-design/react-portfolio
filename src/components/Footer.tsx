import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href="mailto:your@email.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
