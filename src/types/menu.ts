export type SubmenuItem = {
  label: string
  href: string
}

export type HeaderItem = {
  label: string
  labelEn?: string
  href: string
  submenu?: SubmenuItem[]
}
