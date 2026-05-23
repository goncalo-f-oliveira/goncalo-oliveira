import type { CSSProperties } from "react";

const items = [
  {
    when: "2026 - Present",
    title: "Game Developer Intern · Kendir Studios",
    body: "Developed Unity (C#) mechanics, integrated Cloudflare services, and ran performance tests with JMeter.",
  },
  {
    when: "2025",
    title: "CS50P · Harvard University (Online)",
    body: "Python course focused on data structures, algorithms, and OOP.",
  },
  {
    when: "2024",
    title: "Piscine · 42 Porto",
    body: "Intensive C and Shell bootcamp. Project-based learning with no classes and no safety net.",
  },
  {
    when: "2023 - Present",
    title: "Bachelor's Degree in Multimedia · ISLA Gaia",
    body: "Software engineering track - Backend, Frontend, and Mobile.",
  },
];

export function Journey() {
  return (
    <section id="journey" className="px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <p className="label-eyebrow reveal" style={{ "--delay": "60ms" } as CSSProperties}>
          Journey
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-16 reveal"
          style={{ "--delay": "140ms" } as CSSProperties}
        >
          The path so far
        </h2>

        <ol className="relative max-w-3xl mx-auto md:mx-0">
          <span
            aria-hidden
            className="absolute left-2 top-2 bottom-2 w-px bg-border"
          />
          {items.map((it, i) => (
            <li
              key={i}
              className="relative pl-12 pb-20 last:pb-0 reveal"
              style={{ "--delay": `${220 + i * 120}ms` } as CSSProperties}
            >
              <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-background border-2 border-accent" />
              <p className="label-eyebrow mb-2">{it.when}</p>
              {it.title === "Bachelor's Degree in Multimedia · ISLA Gaia" ? (
                <h3 className="text-[1.05rem] font-bold text-foreground inline-flex items-center gap-2">
                  {it.title}
                  <span className="text-[0.7rem] px-2 py-0.5 rounded-full border border-accent/30 bg-accent/10 text-accent">
                    In progress
                  </span>
                </h3>
              ) : it.title === "Game Developer Intern · Kendir Studios" ? (
                <h3 className="text-[1.05rem] font-bold text-foreground inline-flex items-center gap-2">
                  {it.title}
                  <span className="text-[0.7rem] px-2 py-0.5 rounded-full border border-accent/30 bg-accent/10 text-accent">
                    Current
                  </span>
                </h3>
              ) : (
                <h3 className="text-xl font-bold text-foreground">{it.title}</h3>
              )}
              <p className="text-muted-foreground mt-2 leading-relaxed">{it.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
