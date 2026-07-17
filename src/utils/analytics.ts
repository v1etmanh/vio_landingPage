export function trackEvent(name: string, detail?: Record<string, string>) {
  window.dispatchEvent(new CustomEvent(name, { detail }))
  const analyticsWindow = window as Window & { gtag?: (command: string, eventName: string, detail?: Record<string, string>) => void }
  analyticsWindow.gtag?.('event', name, detail)
}
