import { createFileRoute } from "@tanstack/react-router";
import { Github } from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Stack } from "@/components/portfolio/Stack";
import { Journey } from "@/components/portfolio/Journey";
import { Connect } from "@/components/portfolio/Connect";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Gonçalo Oliveira" },
      {
        name: "description",
        content:
          "Portfolio of Goncalo Oliveira, backend developer focused on Python, FastAPI, and software architecture.",
      },
    ],
  }),
});

function Index() {
  useRevealOnScroll();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Stack />
        <Journey />
        <Connect />
      </main>
      <footer className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="h-px w-[100%] mx-auto mb-6 bg-border" />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Gonçalo Oliveira © 2026</span>
          <a
            href="https://github.com/goncalo-f-oliveira"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="transition-colors hover:text-accent"
          >
            <Github size={18} />
          </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
