import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import en from '@/locales/en.json'
import es from '@/locales/es.json'

type Lang = 'en' | 'es'

type Dict = typeof en

type LanguageContextType = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (path: string) => string
}

const dicts: Record<Lang, Dict> = { en, es }

const LanguageContext = createContext<LanguageContextType | null>(null)

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>('es')

  useEffect(() => {
    const stored = (localStorage.getItem('lang') as Lang | null) ?? 'es'
    setLangState(stored)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('lang', l)
  }

  const t = useCallback((path: string) => {
    const parts = path.split('.')
    let cur: any = dicts[lang]
    for (const p of parts) cur = cur?.[p]
    return (cur ?? path) as string
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useI18n = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider')
  return ctx
}
