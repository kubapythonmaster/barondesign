/** Prefixed public asset path (works with GitHub Pages base). */
export function asset(path: string): string {
  const clean = path.replace(/^\//, '')
  const base = import.meta.env.BASE_URL
  return `${base}${clean}`
}
