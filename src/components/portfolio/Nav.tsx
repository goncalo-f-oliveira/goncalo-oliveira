import { useState } from "react";
import { Download, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border fade-in relative">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <a href="#home" className="text-accent font-bold text-lg tracking-tight">
          GO.
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="https://drive.google.com/file/d/1xyYJcr3PZMLoPcVpVtvGXa8kuYB9BZWb/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-[13px] sm:text-sm font-medium text-accent border border-accent/60 hover:border-accent hover:bg-accent/10 px-3 sm:px-4 py-2 rounded-md transition-colors"
          >
            <Download className="w-4 h-4" />
            <span className="hidden md:inline">Download CV</span>
            <span className="md:hidden">CV</span>
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex md:hidden items-center justify-center w-9 h-9 rounded-md border border-border text-muted-foreground hover:text-accent hover:border-accent/60 transition-colors"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>
      <div
        className={`md:hidden ${isOpen ? "block" : "hidden"} border-t border-border bg-background/95 backdrop-blur-md`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 space-y-3">
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
