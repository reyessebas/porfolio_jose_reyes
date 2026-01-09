import { useTheme } from '@/providers/ThemeProvider'
import { useI18n } from '@/providers/LanguageProvider'
import { useMedia } from '@/providers/MediaProvider'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const Sun = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364 6.364-1.414-1.414M8.05 8.05 6.636 6.636m10.728 0-1.414 1.414M8.05 15.95l-1.414 1.414"/>
  </svg>
)

const Moon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

export const Navbar: React.FC = () => {
  const { theme, toggle } = useTheme()
  const { t, lang, setLang } = useI18n()
  const { mediaType, setMediaType } = useMedia()
  const [langOpen, setLangOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const langRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!langRef.current) return
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    if (langOpen) document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [langOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#2b2b2b] bg-zinc-900/95 dark:bg-zinc-950/70 border-b border-zinc-700/60 dark:border-zinc-800/60">
      <nav className="container mx-auto grid grid-cols-[auto_1fr_auto] items-center h-auto md:h-16 px-2 sm:px-3 md:px-6 py-3 md:py-0 gap-2 sm:gap-3 md:gap-4 text-zinc-100">
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
          <img src="/logo.png" alt="Logo" className="h-4 sm:h-8 md:h-10 cursor-pointer" />
          <a
            href="#home"
            className="font-bold text-xs sm:text-lg md:text-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-300 dark:from-amber-600 dark:via-amber-400 dark:to-amber-100 bg-clip-text text-transparent drop-shadow-sm"
          >
            PORTFOLIO
          </a>
        </div>

        <ul className="hidden md:flex items-center justify-center gap-6 text-sm">
          <li><a href="#home" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">{t('nav.home')}</a></li>
          <li><a href="#about" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">{t('nav.about')}</a></li>
          <li><a href="#projects" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">{t('nav.projects')}</a></li>
          <li><a href="#marquee" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Skills</a></li>
        </ul>

        <div className="flex items-center gap-1 sm:gap-2 justify-end">
          <button
            className="md:hidden p-2 rounded-md border border-zinc-600 dark:border-zinc-700 hover:border-amber-500 dark:hover:border-amber-500"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          <div className="relative" ref={langRef}>
            <button
              aria-label="Open language menu"
              onClick={() => setLangOpen((v) => !v)}
              className="p-2 rounded-md border border-zinc-600 dark:border-zinc-700 hover:border-amber-500 dark:hover:border-amber-500 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor">
                <path d="M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20Z" />
                <path d="M2 12h20M12 2c3 3 3 7 3 10s0 7-3 10M12 2C9 5 9 9 9 12s0 7 3 10" />
              </svg>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-28 rounded-md border border-zinc-700 dark:border-zinc-800 bg-zinc-800 dark:bg-zinc-900 shadow-lg z-[100] text-zinc-100"
                >
                  <button
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-zinc-700 dark:hover:bg-zinc-800 ${lang === 'es' ? 'text-amber-600 dark:text-amber-500' : ''}`}
                    onClick={() => { setLang('es'); setLangOpen(false) }}
                  >
                    ES — Español
                  </button>
                  <button
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-zinc-700 dark:hover:bg-zinc-800 ${lang === 'en' ? 'text-amber-600 dark:text-amber-500' : ''}`}
                    onClick={() => { setLang('en'); setLangOpen(false) }}
                  >
                    EN — English
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            aria-label="Toggle theme"
            onClick={toggle}
            className="p-2 rounded-md border border-zinc-600 dark:border-zinc-700 hover:border-amber-500 dark:hover:border-amber-500 transition-colors"
          >
            <motion.span initial={{ rotate: 0 }} animate={{ rotate: theme === 'dark' ? 40 : 0 }} transition={{ type: 'spring', stiffness: 140 }}>
              {theme === 'dark' ? <Moon className="w-5 h-5"/> : <Sun className="w-5 h-5"/>}
            </motion.span>
          </button>

          <div className="ml-0 sm:ml-1 flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setMediaType('video')}
              className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-md border transition-colors ${mediaType === 'video' ? 'bg-zinc-100 text-zinc-900 border-zinc-500 dark:bg-zinc-800 dark:text-white dark:border-zinc-700' : 'bg-transparent text-zinc-100 dark:text-zinc-300 border-zinc-600 dark:border-zinc-700 hover:border-amber-500 dark:hover:border-amber-500'}`}
            >
              Video
            </button>
            <button
              onClick={() => setMediaType('image')}
              className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-md border transition-colors ${mediaType === 'image' ? 'bg-zinc-100 text-zinc-900 border-zinc-500 dark:bg-zinc-800 dark:text-white dark:border-zinc-700' : 'bg-transparent text-zinc-100 dark:text-zinc-300 border-zinc-600 dark:border-zinc-700 hover:border-amber-500 dark:hover:border-amber-500'}`}
            >
              Image
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-zinc-700/60 dark:border-zinc-800/60 bg-zinc-900/95 dark:bg-zinc-950/90 backdrop-blur text-zinc-100"
          >
            <div className="px-3 sm:px-4 py-3 sm:py-4 flex flex-col gap-3 text-xs sm:text-sm">
              <a onClick={() => setMenuOpen(false)} href="#home" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">{t('nav.home')}</a>
              <a onClick={() => setMenuOpen(false)} href="#about" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">{t('nav.about')}</a>
              <a onClick={() => setMenuOpen(false)} href="#projects" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">{t('nav.projects')}</a>
              <a onClick={() => setMenuOpen(false)} href="#gallery" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Gallery</a>
              <a onClick={() => setMenuOpen(false)} href="#marquee" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Skills</a>
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => { setMediaType('video'); setMenuOpen(false) }}
                  className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${mediaType === 'video' ? 'bg-zinc-100 text-zinc-900 border-zinc-500 dark:bg-zinc-800 dark:text-white dark:border-zinc-700' : 'bg-transparent text-zinc-100 dark:text-zinc-300 border-zinc-600 dark:border-zinc-700 hover:border-amber-500 dark:hover:border-amber-500'}`}
                >
                  Video
                </button>
                <button
                  onClick={() => { setMediaType('image'); setMenuOpen(false) }}
                  className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${mediaType === 'image' ? 'bg-zinc-100 text-zinc-900 border-zinc-500 dark:bg-zinc-800 dark:text-white dark:border-zinc-700' : 'bg-transparent text-zinc-100 dark:text-zinc-300 border-zinc-600 dark:border-zinc-700 hover:border-amber-500 dark:hover:border-amber-500'}`}
                >
                  Image
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
