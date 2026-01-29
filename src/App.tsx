import { lazy, Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/sections/About'
import { Github, Linkedin, MessageCircle, Mail, MapPin } from 'lucide-react'

// Lazy load de componentes pesados
const Projects = lazy(() => import('@/sections/Projects'))
const Skills = lazy(() => import('@/components/Skills'))
const SelectorShowcase = lazy(() => import('@/sections/SelectorShowcase'))

function Footer() {
  return (
    <footer className="border-t border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900/50 py-12 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-300 dark:from-amber-600 dark:via-amber-400 dark:to-amber-100 bg-clip-text text-transparent">
              Jose Sebastian Reyes
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              Analista y Desarrollador de Software especializado en crear experiencias digitales funcionales y atractivas.
            </p>
            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <MapPin className="w-4 h-4" />
              <span>Colombia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-zinc-900 dark:text-zinc-100">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Inicio</a></li>
              <li><a href="#about" className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Sobre mí</a></li>
              <li><a href="#projects" className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Proyectos</a></li>
              <li><a href="#gallery" className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Gallery</a></li>
              <li><a href="#marquee" className="text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Skills</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-3 text-zinc-900 dark:text-zinc-100">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:sebastianreyes@example.com" className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/573214109194" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/reyessebas" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jsebastianreye" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-200/60 dark:border-zinc-800/60 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Jose Sebastian Reyes Poveda. Todos los derechos reservados.</p>
          <a href="#home" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors flex items-center gap-1">
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-pulse text-amber-500">Cargando...</div>
  </div>
)

function App() {
  return (
    <div className="tap-highlight-none">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>
        <section id="gallery">
          <Suspense fallback={<LoadingFallback />}>
            <SelectorShowcase />
          </Suspense>
        </section>
        <section id="skills">
          <Suspense fallback={<LoadingFallback />}>
            <Skills />
          </Suspense>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
