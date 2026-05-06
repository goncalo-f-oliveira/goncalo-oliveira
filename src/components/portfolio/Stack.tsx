import type { CSSProperties } from "react";
import { Terminal, Monitor, Wrench, Database, Layers } from "lucide-react";

const cols = [
  {
    icon: Terminal,
    name: "Languages",
    items: [
      "Python",
      "C#",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Dart",
      "PHP",
    ],
  },
  {
    icon: Monitor,
    name: "Frameworks",
    items: [
      "FastAPI",
      "Angular",
      "Flutter",
      "Laravel",
      "Node.js",
      "Express",
      "Bootstrap",
      ".NET"
    ],
  },
  {
    icon: Database,
    name: "Data",
    items: ["PostgreSQL", "MySQL", "SQL Server"],
  },
  {
    icon: Wrench,
    name: "Tools",
    items: ["Git", "Docker", "Figma"],
  },
  {
    icon: Layers,
    name: "Architecture",
    items: ["Clean Architecture", "SOLID", "Design Patterns", "REST"],
  },
];
function Pill({ tech }: { tech: string }) {
  return (
    <span className="stack-pill inline-flex items-center gap-1.5 text-xs px-[10px] py-1 rounded-full bg-background border border-border text-muted-foreground">
      <span>{tech}</span>
    </span>
  );
}

export function Stack() {
  return (
    <section id="stack" className="px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <p className="label-eyebrow reveal" style={{ "--delay": "60ms" } as CSSProperties}>
          Stack
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-16 reveal"
          style={{ "--delay": "140ms" } as CSSProperties}
        >
          What I work with
        </h2>
        <div className="grid md:grid-cols-3 gap-6 w-full">
          {cols.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={c.name}
                className="bg-surface border border-surface-border rounded-lg p-6 reveal"
                style={{ "--delay": `${220 + i * 120}ms` } as CSSProperties}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-background border border-border text-accent">
                    <Icon className="w-4 h-4" />
                  </span>
                  <h3 className="text-lg font-bold text-foreground">{c.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.items.map((i) => (
                    <Pill key={i} tech={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
