import type { CSSProperties } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ipv4Image from "@/assets/images/projects/ipv4_quizz_placeholder2.png";
import islandersVideo from "@/assets/images/videos/Islanders_Video.mp4";
import retailVideo from "@/assets/images/videos/Retail_Video.mp4";
import vasVideo from "@/assets/images/videos/VAS_Video.mp4";

type Project = {
  title: string;
  tagline: string;
  stack: string[];
  repoUrl: string;
  demoUrl?: string;
  cardMediaType: "video" | "image" | "placeholder";
  cardMediaSrc?: string;
  modalEmbedUrl?: string;
  modalWatchUrl?: string;
  modalWatchDisabled?: boolean;
  modalTopImage?: string;
  modalWhat: string;
  modalBuilt: string[];
  modalLearned: string;
};

const projects: Project[] = [
  {
    title: "Islanders",
    tagline:
      "Full-stack learning platform built for ISLA Gaia that lets prospective students explore courses, test their knowledge through quizzes, and earn badges based on performance with role-based access control across four user profiles.",
    stack: ["FastAPI", "PostgreSQL", "Angular", "JWT", "Python"],
    demoUrl: "https://islanders-demo.example.com",
    repoUrl: "https://github.com/goncalo-f-oliveira/islanders-fullstack",
    cardMediaType: "video",
    cardMediaSrc: islandersVideo,
    modalEmbedUrl: "https://www.youtube.com/embed/sgD6pdATGyI",
    modalWatchUrl: "https://youtu.be/sgD6pdATGyI",
    modalWhat:
      "A full-stack learning platform where different user roles unlock different experiences, from browsing courses as a guest to managing all content as an admin.",
    modalBuilt: [
      "Built the entire backend architecture using FastAPI, with modular routers and a service layer to enforce business rules per domain",
      "Implemented JWT authentication with access and refresh tokens, password hashing, and session persistence via localStorage",
      "Designed and implemented all CRUD operations, ORM models, Pydantic schemas and domain services across the full backend",
    ],
    modalLearned:
      "Building an API taught me that security is not a feature you add at the end. Hashing passwords, managing token expiry and thinking about what each endpoint exposes forced me to treat every route as a potential vulnerability.",
  },
  {
    title: "Retail Management System",
    tagline:
      "Windows desktop application simulating the full operations of a retail store, built with a strict 3-layer architecture and role-based permissions across four user types.",
    stack: ["C#", ".NET", "Windows Forms", "SQL Server"],
    repoUrl: "https://github.com/goncalo-f-oliveira/retail-management-system",
    cardMediaType: "video",
    cardMediaSrc: retailVideo,
    modalEmbedUrl: "https://www.youtube.com/embed/NT8X4QytvTI",
    modalWatchUrl: "https://youtu.be/NT8X4QytvTI",
    modalWhat:
      "Windows desktop application built around a strict 3-layer architecture and role-based permissions, simulating the full operations of a retail store across four user types.",
    modalBuilt: [
      "Defined and enforced the 3-layer architecture across the team, separating Presentation, Control and Data from the start",
      "Built the permission system and designed dedicated shell forms for each of the four user roles",
      "Implemented all CRUD operations and wrote the business validation logic in the Control layer",
    ],
    modalLearned:
      "Layered architecture feels like unnecessary structure when you first apply it. Halfway through the project it became clear why it exists. Every time we needed to change something, the separation meant the change stayed contained and nothing else broke.",
  },
  {
    title: "VAS - Virtual Audio Scape",
    tagline:
      "Web platform for mixing real-world sounds into immersive soundscapes and syncing them with video, processed entirely server-side.",
    stack: ["Node.js", "Express", "MySQL", "FFmpeg"],
    repoUrl: "https://github.com/goncalo-f-oliveira/vas-studio",
    cardMediaType: "video",
    cardMediaSrc: vasVideo,
    modalEmbedUrl: "https://www.youtube.com/embed/3Pxvjlk-9Wg",
    modalWatchUrl: "https://youtu.be/3Pxvjlk-9Wg",
    modalWhat:
      "A web platform where users build personalised soundscapes by layering sounds from themed packs and syncing the result to video through FFmpeg running on the server.",
    modalBuilt: [
      "Built almost all frontend pages with a strong focus on UX, making a technically complex product feel intuitive to navigate",
      "Designed the interface around the user's mental model: browsing packs, mixing sounds and exporting video follow a natural flow with no friction",
      "Contributed to the backend integration between the sound system and FFmpeg, handling the pipeline from user upload to processed video output",
    ],
    modalLearned:
      "This project had real UX complexity. A virtual sound environment with layered audio, packs and video sync could easily feel overwhelming. Thinking carefully about how a user moves through those steps taught me that good interface decisions and solid backend architecture are not separate concerns, one exposes the other.",
  },
  {
    title: "IPv4 Quiz App",
    tagline:
      "Educational mobile app that teaches IPv4 addressing through interactive quizzes, a medal ranking system and progress tracking, built individually in Flutter with local SQLite persistence",
    stack: ["Flutter", "Dart", "SQLite"],
    repoUrl: "https://github.com/goncalo-f-oliveira/ipv4_quizz_flutter",
    cardMediaType: "image",
    cardMediaSrc: ipv4Image,
    modalTopImage: ipv4Image,
    modalWhat:
      "A mobile app that turns IPv4 networking theory into a game. Users progress through levels, earn medals and compete on a shared ranking based on their quiz scores.",
    modalBuilt: [
      "Built the entire app individually in Flutter and Dart, from authentication to ranking system",
      "Implemented a level progression system where users can only advance after passing the current level",
      "Designed the medal and ranking logic so multiple users compete on score, creating a real incentive to replay",
      "Used SQLite for all local persistence, keeping the app fully offline and storing each user's history separately",
    ],
    modalLearned:
      "Building a game mechanic taught me to think from the player's perspective, not the developer's. The medal thresholds went through several iterations because the first versions either felt too easy or discouraging. Getting that balance right was a design problem as much as a technical one, and it changed how I think about user feedback in any kind of system.",
  },
];

function Pill({ tech }: { tech: string }) {
  return (
    <span className="tech-pill inline-flex items-center gap-1.5 text-xs px-[10px] py-1 rounded-full bg-background border border-border text-muted-foreground">
      <span>{tech}</span>
    </span>
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <Dialog>
      <article
        className="group bg-surface border border-surface-border rounded-lg p-5 sm:p-6 md:p-8 transition-colors hover:border-foreground/30 reveal md:h-[360px]"
        style={{ "--delay": `${index * 120}ms` } as CSSProperties}
      >
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-stretch h-full">
          <div className="w-full h-full rounded-md bg-[#1a1a1a] overflow-hidden flex items-center justify-center">
            {p.cardMediaType === "video" && p.cardMediaSrc ? (
              <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                <source src={p.cardMediaSrc} type="video/mp4" />
              </video>
            ) : p.cardMediaType === "image" && p.cardMediaSrc ? (
              <img src={p.cardMediaSrc} alt={p.title} className="w-full h-full object-cover" />
            ) : (
              <span className="text-4xl text-accent/70 leading-none" aria-hidden>
                ▶
              </span>
            )}
          </div>

          <div className="flex h-full flex-col gap-4 text-left items-start">
            <div className="min-h-[96px] md:min-h-[120px]">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">{p.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground mt-2 leading-[1.6] max-w-xl">
                {p.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 flex-1 content-start justify-start">
              {p.stack.map((s) => (
                <Pill key={s} tech={s} />
              ))}
            </div>

            <div className="mt-auto flex w-full items-center justify-between gap-3">
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="text-sm font-medium text-accent hover:text-accent/80 transition-colors md:order-first"
                >
                  View Project →
                </button>
              </DialogTrigger>
              <a
                href={p.repoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center rounded-md border border-white/20 p-2 text-foreground transition-colors hover:border-accent"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 2C6.48 2 2 6.58 2 12.26C2 16.78 4.87 20.64 8.84 21.98C9.34 22.08 9.5 21.76 9.5 21.48C9.5 21.23 9.49 20.57 9.48 19.71C6.72 20.33 6.13 18.52 6.13 18.52C5.69 17.36 5.07 17.05 5.07 17.05C4.2 16.44 5.14 16.45 5.14 16.45C6.1 16.52 6.6 17.46 6.6 17.46C7.46 18.95 8.85 18.52 9.39 18.27C9.48 17.62 9.74 17.18 10.02 16.93C7.81 16.67 5.5 15.78 5.5 11.75C5.5 10.6 5.9 9.66 6.56 8.92C6.45 8.66 6.1 7.57 6.66 6.1C6.66 6.1 7.55 5.81 9.47 7.14C10.33 6.89 11.26 6.76 12.19 6.75C13.12 6.76 14.05 6.89 14.91 7.14C16.83 5.81 17.72 6.1 17.72 6.1C18.28 7.57 17.93 8.66 17.82 8.92C18.48 9.66 18.88 10.6 18.88 11.75C18.88 15.79 16.56 16.66 14.35 16.92C14.7 17.23 15.01 17.84 15.01 18.78C15.01 20.11 15 21.21 15 21.48C15 21.76 15.16 22.08 15.66 21.98C19.63 20.64 22.5 16.78 22.5 12.26C22.5 6.58 18.02 2 12 2Z" />
                </svg>
                <span className="hidden md:inline ml-2">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </article>

      <DialogContent className="max-w-[700px] max-h-[85vh] overflow-y-auto">
        <div className="space-y-6">
          <div className="space-y-2">
            {p.modalTopImage ? (
              <img
                src={p.modalTopImage}
                alt={p.title}
                className="w-full rounded-md object-cover"
              />
            ) : (
              <div className="w-full aspect-video rounded-md overflow-hidden border border-border">
                <iframe
                  src={p.modalEmbedUrl}
                  title={p.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            {p.modalWatchUrl ? (
              <a
                href={p.modalWatchUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-accent hover:text-accent/80 transition-colors"
              >
                Watch on YouTube ↗
              </a>
            ) : p.modalWatchDisabled ? (
              <span className="cursor-not-allowed" title="Video coming soon">
                <span className="text-xs text-white/30 pointer-events-none">
                  Watch on YouTube ↗
                </span>
              </span>
            ) : null}
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground">{p.title}</h3>
            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <Pill key={s} tech={s} />
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-widest text-accent">WHAT IT IS</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.modalWhat}</p>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-widest text-accent">WHAT I BUILT</p>
              <ul className="space-y-1.5 list-disc list-outside ml-4 text-sm text-muted-foreground">
                {p.modalBuilt.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-widest text-accent">WHAT I LEARNED</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.modalLearned}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border">
            <a
              href={p.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-foreground border border-border hover:border-foreground/50 px-3 py-1.5 rounded-md transition-colors"
            >
              <Github className="w-3.5 h-3.5" /> View Project
            </a>
            {p.demoUrl ? (
              <a
                href={p.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-foreground bg-accent/10 border border-accent/30 hover:border-accent/50 hover:bg-accent/20 px-3 py-1.5 rounded-md transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Live Demo
              </a>
            ) : null}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        <p className="label-eyebrow reveal" style={{ "--delay": "60ms" } as CSSProperties}>
          Projects
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-12 sm:mb-16 reveal"
          style={{ "--delay": "140ms" } as CSSProperties}
        >
          What I built
        </h2>
        <div className="space-y-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
