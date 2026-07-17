import { createContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Language = 'vi' | 'en'

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  isVietnamese: boolean
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'vi'
    return window.localStorage.getItem('vio-language') === 'en' ? 'en' : 'vi'
  })

  const setLanguage = (nextLanguage: Language) => setLanguageState(nextLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem('vio-language', language)
  }, [language])

  const value = useMemo(() => ({ language, setLanguage, isVietnamese: language === 'vi' }), [language])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export { LanguageContext }
