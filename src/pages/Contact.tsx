import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="container py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 animate-fade-up">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">Get in Touch</p>
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">
            Let's work together<span className="text-gradient">.</span>
          </h1>
          <p className="text-muted-foreground max-w-lg">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 animate-fade-up [animation-delay:100ms]">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail size={20} className="text-primary mt-0.5" />
              <div>
                <p className="font-heading font-medium text-sm">Email</p>
                <p className="text-muted-foreground text-sm">your@email.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={20} className="text-primary mt-0.5" />
              <div>
                <p className="font-heading font-medium text-sm">Phone</p>
                <p className="text-muted-foreground text-sm">+1 (555) 000-0000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-primary mt-0.5" />
              <div>
                <p className="font-heading font-medium text-sm">Location</p>
                <p className="text-muted-foreground text-sm">Your City, Country</p>
              </div>
            </div>
          </div>

          {/* Form */}
          {submitted ? (
            <div className="rounded-xl border border-primary/30 bg-card p-8 flex flex-col items-center justify-center gap-4 glow-amber">
              <Send size={32} className="text-primary" />
              <p className="font-heading text-lg font-semibold">Message Sent!</p>
              <p className="text-muted-foreground text-sm text-center">
                Thank you for reaching out. I'll get back to you soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm text-primary hover:underline mt-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium font-heading">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium font-heading">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium font-heading">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:glow-amber"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
