import { useLanguage } from './useLanguage'
import { en } from '@/app/locales/en'
import { vi } from '@/app/locales/vi'

export function useLocale() {
  const { language } = useLanguage()
  return language === 'en' ? en : vi
}
