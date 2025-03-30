import { Context, createContext, useContext } from 'react'

type ThemeContextType = {
  theme: string,
  setTheme: (language: string) => void
}

export const SUPPORTED_THEMES = ['dark', 'light']

export function updateThemeInHtml(v: string) {
  document.querySelector('html').setAttribute('data-theme', v)
}

export function updateThemeInLocalStorage(v: string) {
  window.localStorage.setItem('theme', v)
}

export function initTheme(): string {
  let theme = window.localStorage.getItem('theme')
  if (theme != null) {
    theme = theme.substring(
      theme.startsWith('"') ? 1 : 0,
      theme.length - (theme.endsWith('"') ? 1 : 0)
    )
  }

  if (!SUPPORTED_THEMES.includes(theme)) {
    theme = document.querySelector('html').getAttribute('data-theme')
  }

  if (!SUPPORTED_THEMES.includes(theme)) {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? SUPPORTED_THEMES[0] : SUPPORTED_THEMES[1]
  }

  if (!window.localStorage.getItem('theme')
    || !SUPPORTED_THEMES.includes(window.localStorage.getItem('theme'))) {
    updateThemeInLocalStorage(theme)
  }

  if (!document.querySelector('html').getAttribute('data-theme')
    || !SUPPORTED_THEMES.includes(document.querySelector('html').getAttribute('data-theme'))) {
    updateThemeInHtml(theme)
  }
  return theme
}

const ThemeContext: Context<ThemeContextType> = createContext({
  theme: SUPPORTED_THEMES[1],
  // biome-ignore lint/suspicious/noEmptyBlockStatements: Default value
  setTheme: () => {}
})
export default ThemeContext

export const useThemeContext = () => useContext(ThemeContext)
