import type { CSSProperties } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Connect() {
  return (
    <section id="contact" className="px-6 py-40">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="text-5xl md:text-[56px] font-bold text-foreground tracking-tight reveal"
          style={{ "--delay": "80ms" } as CSSProperties}
        >
          Let's connect.
        </h2>
        <p
          className="text-lg text-muted-foreground mt-5 reveal"
          style={{ "--delay": "160ms" } as CSSProperties}
        >
          I am available for conversations about a master's degree or projects.
        </p>
        <div className="flex items-center justify-center gap-4 mt-12">
          <a
            href="https://github.com/goncalo-f-oliveira"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent reveal"
            style={{ "--delay": "260ms" } as CSSProperties}
          >
            <Github className="w-5 h-5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="http://linkedin.com/in/goncaloliveira20"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent reveal"
            style={{ "--delay": "340ms" } as CSSProperties}
          >
            <Linkedin className="w-5 h-5" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="mailto:goliveira2212004@gmail.com"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent reveal"
            style={{ "--delay": "420ms" } as CSSProperties}
          >
            <Mail className="w-5 h-5" />
            <span className="hidden sm:inline">goliveira2212004@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
