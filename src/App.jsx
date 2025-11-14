import React from 'react'
import Spline from '@splinetool/react-spline'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-500/10 text-emerald-300 ring-1 ring-inset ring-emerald-400/20 px-3 py-1 text-xs font-medium">
      {children}
    </span>
  )
}

function ProjectCard({ title, description, tags, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group relative overflow-hidden rounded-2xl border border-emerald-900/20 bg-neutral-900/60 hover:bg-neutral-900/80 transition-colors p-6 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="pointer-events-none absolute -inset-px bg-gradient-to-br from-emerald-400/10 via-emerald-500/10 to-transparent" />
      </div>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-white tracking-tight">{title}</h3>
        <svg className="w-5 h-5 text-emerald-300/70 group-hover:text-emerald-300 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
      </div>
      <p className="mt-3 text-sm text-neutral-300 leading-relaxed">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags?.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </a>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-4 rounded-2xl border border-emerald-900/20 bg-neutral-900/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60">
            <div className="flex items-center justify-between px-4 py-3">
              <a href="#" className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-green-600 shadow-lg" />
                <span className="text-white font-semibold tracking-tight">My Portfolio</span>
              </a>
              <nav className="hidden md:flex items-center gap-8">
                <a href="#about" className="text-sm text-neutral-200 hover:text-emerald-300 transition-colors">About</a>
                <a href="#projects" className="text-sm text-neutral-200 hover:text-emerald-300 transition-colors">Projects</a>
                <a href="#skills" className="text-sm text-neutral-200 hover:text-emerald-300 transition-colors">Skills</a>
                <a href="#contact" className="text-sm text-neutral-200 hover:text-emerald-300 transition-colors">Contact</a>
              </nav>
              <a href="#contact" className="hidden md:inline-flex items-center rounded-xl bg-emerald-500/20 text-emerald-200 ring-1 ring-inset ring-emerald-400/30 hover:bg-emerald-500/30 px-4 py-2 text-sm font-medium transition-colors">Let’s talk</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Dark green gradient overlay (does not block the Spline interactions) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/40 to-neutral-950/80" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_300px_at_50%_10%,rgba(16,185,129,0.18),transparent)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="pt-36 md:pt-40 lg:pt-48 pb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for freelance work
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-br from-emerald-200 via-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                Designer & Frontend Engineer
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-neutral-200/90 leading-relaxed">
              I craft clean, performant web experiences with a focus on minimalism, motion, and accessibility. Let’s build something thoughtful together.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-emerald-500 text-neutral-900 hover:bg-emerald-400 px-5 py-3 font-semibold shadow-lg shadow-emerald-500/20 transition-colors">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-neutral-900/70 ring-1 ring-inset ring-emerald-500/30 text-white hover:bg-neutral-900/90 px-5 py-3 font-semibold">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-20 sm:py-24">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_200px_at_10%_20%,rgba(16,185,129,0.12),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-5">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-400/20 to-green-700/10 border border-emerald-900/20" />
            </div>
            <div className="md:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">About Me</h2>
              <p className="mt-4 text-neutral-300 leading-relaxed">
                I’m a creative developer focused on crafting human‑centered experiences. My work blends strong design foundations with modern technologies to ship polished, maintainable products.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge>React</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Tailwind</Badge>
                <Badge>Framer Motion</Badge>
                <Badge>Accessibility</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative py-20 sm:py-24 border-t border-emerald-900/10">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_250px_at_90%_10%,rgba(16,185,129,0.10),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
            <a href="#contact" className="hidden sm:inline text-sm text-emerald-300 hover:text-emerald-200">See availability →</a>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Interactive Dashboard"
              description="A fast, accessible analytics dashboard with dynamic charts and delightful micro‑interactions."
              tags={["React", "Tailwind", "Charts"]}
              link="#"
            />
            <ProjectCard
              title="E‑commerce UI Kit"
              description="Component‑driven storefront system focused on performance, theming, and conversion."
              tags={["Design Systems", "Performance", "A/B Testing"]}
              link="#"
            />
            <ProjectCard
              title="3D Landing Experience"
              description="Immersive hero with web‑friendly 3D, subtle motion, and responsive fallbacks."
              tags={["3D", "Spline", "Framer Motion"]}
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Skills</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {['React', 'Next.js', 'TypeScript', 'Node', 'Python', 'FastAPI', 'Tailwind', 'Framer Motion', 'MongoDB', 'Testing', 'CI/CD', 'UX'].map((s) => (
              <div key={s} className="rounded-xl border border-emerald-900/20 bg-neutral-900/50 px-4 py-3 text-sm text-neutral-200">
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-20 sm:py-24 border-t border-emerald-900/10">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_220px_at_50%_10%,rgba(16,185,129,0.10),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight text-center">Let’s build something</h2>
          <p className="mt-3 text-neutral-300 text-center">Tell me about your project and timeline. I’ll get back within 24–48 hours.</p>

          <form className="mt-8 grid grid-cols-1 gap-4">
            <input className="rounded-xl bg-neutral-900/70 border border-emerald-900/30 focus:border-emerald-500/50 focus:ring-emerald-500/20 px-4 py-3 outline-none text-sm placeholder:text-neutral-500" placeholder="Your name" />
            <input type="email" className="rounded-xl bg-neutral-900/70 border border-emerald-900/30 focus:border-emerald-500/50 focus:ring-emerald-500/20 px-4 py-3 outline-none text-sm placeholder:text-neutral-500" placeholder="Email" />
            <textarea rows={5} className="rounded-xl bg-neutral-900/70 border border-emerald-900/30 focus:border-emerald-500/50 focus:ring-emerald-500/20 px-4 py-3 outline-none text-sm placeholder:text-neutral-500" placeholder="Project details" />
            <button type="button" onClick={() => alert('Thanks! This demo form is not wired to a backend yet.')} className="rounded-xl bg-emerald-500 text-neutral-900 hover:bg-emerald-400 px-6 py-3 font-semibold shadow-lg shadow-emerald-500/20 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10 border-t border-emerald-900/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-neutral-300 hover:text-emerald-300">GitHub</a>
            <a href="#" className="text-neutral-300 hover:text-emerald-300">LinkedIn</a>
            <a href="mailto:hello@example.com" className="text-neutral-300 hover:text-emerald-300">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
