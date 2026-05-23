import type { CSSProperties } from "react";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Typewriter } from "./Typewriter";
import profileImage from "@/assets/images/profile.PNG";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 px-6"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div
          className="space-y-6 reveal"
          style={{ "--delay": "80ms" } as CSSProperties}
        >
          <p className="label-eyebrow">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold text-foreground leading-[1.05] tracking-tight">
            Gonçalo<br />Oliveira
          </h1>
          <p className="text-2xl text-muted-foreground font-light">
            Multimedia & Software Engineering Student
          </p>
          <Typewriter text="Final-year student focused on backend systems  and clean architecture. Currently interning at a game studio." />

          <div className="flex flex-wrap items-center gap-3 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-medium px-5 py-2.5 rounded-md hover:bg-accent/90 transition-colors text-sm"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/goncalo-f-oliveira"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-foreground/30 text-foreground font-medium px-5 py-2.5 rounded-md hover:border-foreground hover:bg-foreground/5 transition-colors text-sm"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="http://linkedin.com/in/goncaloliveira20"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-foreground/30 text-foreground font-medium px-5 py-2.5 rounded-md hover:border-foreground hover:bg-foreground/5 transition-colors text-sm"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="mailto:goncalo2212004@gmail.com"
              aria-label="Email"
              className="inline-flex items-center justify-center w-10 h-10 rounded-md text-muted-foreground hover:text-accent hover:bg-foreground/5 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* RIGHT — photo */}
        <div
          className="relative flex items-center justify-center reveal"
          style={{ "--delay": "200ms" } as CSSProperties}
        >
          <div className="absolute inset-0 hero-glow pointer-events-none" />
          <img
            src={profileImage}
            alt="Gonçalo Oliveira"
            className="relative w-full max-w-md aspect-[3/4.5] object-contain rounded-md"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#projects"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors"
      >
        <ChevronDown className="w-6 h-6 animate-bounce-subtle" />
      </a>
    </section>
  );
}
