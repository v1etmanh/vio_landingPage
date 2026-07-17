export const MEMBER_STORIES = [
  { id: 'student-01', href: 'https://www.facebook.com/share/r/1BTJHCnGT8/', consentConfirmedAt: '2026-07-17' },
  { id: 'student-02', href: 'https://www.facebook.com/share/r/1EgMQbZDMB/', consentConfirmedAt: '2026-07-17' },
  { id: 'student-03', href: 'https://www.facebook.com/share/r/1M7chDDrsd/', consentConfirmedAt: '2026-07-17' },
] as const

// Keep this empty until the owner supplies a verified name, photo and specialty.
// The UI intentionally renders an honest placeholder instead of invented profiles.
export const TRAINERS: readonly {
  id: string
  name: string
  specialty: string
  image: string
}[] = []
