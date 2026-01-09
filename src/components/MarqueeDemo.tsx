import { Marquee } from '@/components/ui/marquee'

const chip = (label: string, color: string) => (
  <div className="flex items-center gap-3 rounded-full px-5 py-2.5 bg-black/70 text-white shadow-lg border border-white/10">
    <span
      className="h-9 w-9 rounded-full"
      style={{ background: color }}
      aria-hidden
    />
    <span className="text-base font-semibold whitespace-nowrap">{label}</span>
  </div>
)

const Logos = {
  motion: () => chip('Framer / Motion', 'linear-gradient(135deg, #a855f7, #6366f1)'),
  nextjs: () => chip('React', 'linear-gradient(135deg, #111, #444)'),
  html: () => chip('HTML5', 'linear-gradient(135deg, #f97316, #fb923c)'),
  css: () => chip('CSS3', 'linear-gradient(135deg, #2563eb, #38bdf8)'),
  js: () => chip('JavaScript', 'linear-gradient(135deg, #facc15, #eab308)'),
  python: () => chip('Python', 'linear-gradient(135deg, #2563eb, #facc15)'),
  git: () => chip('Git & GitHub', 'linear-gradient(135deg, #f97316, #ef4444)'),
  mysql: () => chip('MySQL', 'linear-gradient(135deg, #0ea5e9, #2563eb)'),
  scrum: () => chip('Scrum', 'linear-gradient(135deg, #22c55e, #16a34a)'),
  figma: () => chip('Figma', 'linear-gradient(135deg, #ec4899, #a855f7)'),
  wordpress: () => chip('WordPress', 'linear-gradient(135deg, #0ea5e9, #0369a1)'),
  canva: () => chip('Canva', 'linear-gradient(135deg, #06b6d4, #22d3ee)'),
}

export function MarqueeDemo() {
  const items = [
    Logos.html,
    Logos.css,
    Logos.js,
    Logos.nextjs,
    Logos.motion,
    Logos.python,
    Logos.git,
    Logos.mysql,
    Logos.scrum,
    Logos.figma,
    Logos.wordpress,
    Logos.canva,

  ]

  return (
    <div className="w-full bg-background py-12">
      <div className="container">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">Skills & stack</p>
        <Marquee speed={22} pauseOnHover direction="left">
          {items.map((Logo, index) => (
            <div
              key={index}
              className="relative h-full w-fit mx-8 sm:mx-12 flex items-center justify-start"
            >
              <Logo />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default MarqueeDemo
