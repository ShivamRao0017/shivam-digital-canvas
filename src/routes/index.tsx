import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Asterisk,
  Braces,
  Code2,
  Cpu,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shivam Yadav — CSE (AI/ML) Student" },
      {
        name: "description",
        content:
          "Portfolio of Shivam Yadav, a first-year CSE (AI/ML) student at JECRC University exploring code, AI, and modern web development.",
      },
      { property: "og:title", content: "Shivam Yadav — CSE (AI/ML) Student" },
      {
        property: "og:description",
        content:
          "A first-year student learning, experimenting, and building with code and AI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

const learning = [
  {
    number: "01",
    title: "C language",
    status: "Foundations",
    copy: "Building a basic understanding of programming logic, syntax, and problem-solving.",
    icon: Braces,
  },
  {
    number: "02",
    title: "Python",
    status: "Learning now",
    copy: "Learning the language step by step and exploring the libraries that make it powerful.",
    icon: Code2,
  },
  {
    number: "03",
    title: "AI + ML",
    status: "Exploring",
    copy: "Understanding what intelligent systems can do and how useful ideas become real applications.",
    icon: Cpu,
  },
];

function Portfolio() {
  return (
    <main className="overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Main navigation">
          <a href="#top" className="font-display text-sm font-semibold tracking-normal" aria-label="Shivam Yadav, home">
            SY<span className="text-primary">.</span>
          </a>
          <div className="flex items-center gap-5 text-xs font-medium text-muted-foreground sm:gap-8 sm:text-sm">
            <a className="transition-colors hover:text-foreground" href="#about">About</a>
            <a className="transition-colors hover:text-foreground" href="#learning">Learning</a>
            <a className="transition-colors hover:text-foreground" href="#projects">Projects</a>
          </div>
        </nav>
      </header>

      <section id="top" className="relative flex min-h-[92svh] items-end border-b border-line px-5 pb-14 pt-28 sm:px-8 sm:pb-20 lg:px-12">
        <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-[1440px]">
          <div className="mb-12 flex items-center gap-3 text-xs font-semibold uppercase text-muted-foreground sm:mb-16">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_5px_var(--status-ring)]" />
            Learning in public · Jaipur, India
          </div>
          <h1 className="max-w-6xl font-display text-[clamp(4rem,11vw,10rem)] font-semibold leading-[0.86] tracking-normal">
            Hi, I’m Shivam<span className="text-primary">.</span>
          </h1>
          <div className="mt-10 grid items-end gap-8 lg:grid-cols-[1fr_28rem]">
            <p className="max-w-2xl text-xl font-medium leading-snug text-muted-foreground sm:text-2xl lg:text-3xl">
              First-Year CSE (AI/ML) Student <span className="text-subtle">•</span> Tech Enthusiast <span className="text-subtle">•</span> Curious Builder
            </p>
            <div className="flex items-center justify-between border-t border-line pt-5 text-sm text-muted-foreground lg:justify-end lg:gap-5">
              <span>Scroll to explore</span>
              <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-ink py-24 text-on-ink sm:py-36 lg:py-44">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[15rem_1fr] lg:px-12">
          <div>
            <p className="section-label text-on-ink-muted">01 / About</p>
          </div>
          <div className="max-w-5xl">
            <p className="font-display text-3xl font-medium leading-tight tracking-normal sm:text-5xl lg:text-6xl">
              I’m at the beginning of my journey—learning how code works, how AI thinks, and how ideas can become useful digital experiences.
            </p>
            <div className="mt-16 grid gap-10 border-t border-on-ink-line pt-8 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase text-on-ink-muted">Currently</p>
                <p className="text-lg">B.Tech CSE (AI/ML)</p>
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold uppercase text-on-ink-muted">Studying at</p>
                <p className="text-lg">JECRC University</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="learning" className="py-24 sm:py-36 lg:py-44">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[15rem_1fr]">
            <p className="section-label text-muted-foreground">02 / Learning</p>
            <div>
              <h2 className="max-w-3xl font-display text-5xl font-semibold leading-none tracking-normal sm:text-7xl">Work in progress.<br /><span className="text-muted-foreground">By design.</span></h2>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">No inflated skill bars or expert claims—just an honest view of what I’m learning right now.</p>
            </div>
          </div>
          <div className="mt-20 border-t border-line">
            {learning.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.number} className="learning-row group grid gap-6 border-b border-line py-8 sm:grid-cols-[4rem_1fr_auto] sm:items-center lg:py-10">
                  <span className="font-mono text-xs text-muted-foreground">{item.number}</span>
                  <div className="grid gap-4 lg:grid-cols-[minmax(12rem,0.7fr)_1fr] lg:items-center">
                    <h3 className="flex items-center gap-4 font-display text-2xl font-semibold sm:text-3xl">
                      <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
                      {item.title}
                    </h3>
                    <p className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">{item.copy}</p>
                  </div>
                  <span className="w-fit rounded-full border border-line bg-surface px-4 py-2 text-xs font-semibold">{item.status}</span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-24 sm:py-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <p className="section-label text-muted-foreground">03 / What pulls me forward</p>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
            {[
              ["Artificial intelligence", "The possibility of building systems that learn, assist, and solve real problems."],
              ["Modern web", "Turning ideas into thoughtful, accessible experiences with AI-assisted development."],
              ["Useful projects", "Experimenting with technology not just to learn it, but to make something that matters."],
            ].map(([title, copy], index) => (
              <article className="min-h-72 bg-background p-8 sm:p-10" key={title}>
                <div className="mb-20 flex items-center justify-between text-muted-foreground">
                  <Asterisk className="h-5 w-5" aria-hidden="true" />
                  <span className="font-mono text-xs">0{index + 1}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold">{title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 sm:py-36 lg:py-44">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[15rem_1fr] lg:px-12">
          <p className="section-label text-muted-foreground">04 / Projects</p>
          <div className="relative overflow-hidden rounded-3xl bg-ink p-8 text-on-ink sm:p-12 lg:p-16">
            <div className="project-orbit absolute -right-24 -top-24 h-80 w-80 rounded-full border border-on-ink-line" aria-hidden="true" />
            <Sparkles className="h-7 w-7 text-primary" strokeWidth={1.5} aria-hidden="true" />
            <p className="mt-20 text-xs font-semibold uppercase text-on-ink-muted">The next chapter</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">Small experiments.<br />Useful ideas. Coming soon.</h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-on-ink-muted">I’m building my foundation before filling this space. As I learn Python, AI, and web development, this is where the work will live.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-line px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Learning. Experimenting. Building.</p>
            <p className="mt-3 font-display text-3xl font-semibold">Shivam Yadav<span className="text-primary">.</span></p>
          </div>
          <a href="#top" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-primary">
            Back to top <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </footer>
    </main>
  );
}