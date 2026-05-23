import { Download } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border fade-in">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
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
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent border border-accent/60 hover:border-accent hover:bg-accent/10 px-4 py-2 rounded-md transition-colors"
        >
          <Download className="w-4 h-4" />
          <a href="https://drive.google.com/file/d/1xyYJcr3PZMLoPcVpVtvGXa8kuYB9BZWb/view?usp=sharing" target="_blank" className="hidden sm:inline">Download CV</a>
        </a>
      </nav>
    </header>
  );
}
