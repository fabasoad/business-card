import { Context, createContext } from 'react'

export const SUPPORTED_THEMES = ['dark', 'light']

type InitThemePostFunction = (v: string) => void

type ThemeContextType = {
  theme: string,
  setTheme: (v: string) => void
}

export function updateThemeInHtml(v: string) {
  document.querySelector('html').setAttribute('data-theme', v)
}

export function updateThemeInLocalStorage(v: string) {
  window.localStorage.setItem('theme', v)
}

export function initTheme() {
  const postFunctions: InitThemePostFunction[] = []
  let theme = window.localStorage.getItem('theme')
  if (theme != null) {
    theme = theme.substring(
      theme.startsWith('"') ? 1 : 0,
      theme.length - (theme.endsWith('"') ? 1 : 0)
    )
  }

  if (!SUPPORTED_THEMES.includes(theme)) {
    postFunctions.push(updateThemeInLocalStorage)
    theme = document.querySelector('html').getAttribute('data-theme')
  }

  if (!SUPPORTED_THEMES.includes(theme)) {
    postFunctions.push(updateThemeInHtml)
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? SUPPORTED_THEMES[0] : SUPPORTED_THEMES[1]
  }

  postFunctions.forEach((f: InitThemePostFunction) => f(theme))
  return theme
}

const ThemeContext: Context<ThemeContextType> = createContext({
  theme: SUPPORTED_THEMES[1],
  // biome-ignore lint/suspicious/noEmptyBlockStatements: Default value
  setTheme: () => {}
})
export default ThemeContext
