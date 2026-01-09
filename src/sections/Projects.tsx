import { motion } from 'framer-motion'
import { useI18n } from '@/providers/LanguageProvider'

type Project = {
  title: string
  description: string
  image: string
  demo: string
  github: string
  tags: string[]
}

const projectData = [
  {
    id: 'panevi',
    image: '../../public/proyectos/panevi.png',
    demo: 'https://github.com/paneviid#readme',
    github: 'https://github.com/reyessebas/Panevi',
    tags: ['Php', 'Javascript', 'Html', 'Css', 'Scss'],
  },
    {
    id: 'sena',
    image: '../../public/proyectos/lading_sena.png',
    demo: 'https://reyessebas.github.io/oferta-sena-programas/',
    github: 'https://github.com/reyessebas/oferta-sena-programas',
    tags: ['Html', 'Css'],
  },
  {
    id: 'perfectvibes',
    image: '../../public/proyectos/perfectvibes.png',
    demo: 'https://github.com/reyessebas/Perfectvibes',
    github: 'https://github.com/reyessebas/Perfectvibes',
    tags: ['Php', 'Javascript', 'Html', 'Css', 'Scss'],
  },

  {
    id: 'cieloazul',
    image: '../../public/proyectos/cieloazul.png',
    demo: 'https://reyessebas.github.io/cieloazul_hotel/',
    github: 'https://github.com/reyessebas/cieloazul_hotel',
    tags: ['Html', 'Css', 'JavaScript', 'Tailwind'],
  },
]

export const Projects: React.FC = () => {
  const { t } = useI18n()
  const projects: Project[] = projectData.map((p) => ({
    ...p,
    title: t(`projects.items.${p.id}.title`),
    description: t(`projects.items.${p.id}.description`),
  }))

  return (
    <section id="projects" className="container py-20 md:py-28">
      <motion.h2
        className="text-3xl md:text-4xl font-semibold mb-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {t('projects.title')}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="group overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              <div className="aspect-[4/3] sm:aspect-auto sm:h-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col h-full">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-amber-500">Proyecto</p>
                    <h3 className="font-semibold text-xl mt-1 text-foreground">{p.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2 leading-relaxed flex-1">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">{tag}</span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-3 py-2 text-sm font-semibold rounded-md bg-amber-500 text-white shadow hover:bg-amber-600 transition-colors"
                  >
                    Visualizar
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-3 py-2 text-sm font-semibold rounded-md border border-zinc-300 dark:border-zinc-700 text-foreground hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
