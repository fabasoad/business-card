import * as React from 'react'
import useLocalStorage from 'use-local-storage'

export type ThemeImageProps = {
  className?: string,
  imgLight: any,
  imgDark?: any,
  alt: string,
  title: string
}

export default function ThemeImage({ className, imgLight, imgDark, alt, title }: ThemeImageProps) {
  const getSystemTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  const [theme, _] = useLocalStorage('theme', getSystemTheme())

  const chosenTheme = theme
    ?? document.querySelector('html').getAttribute('data-theme')
    ?? getSystemTheme()

  return (
    <img
      className={className}
      src={chosenTheme === 'dark' ? (imgDark ?? imgLight) : imgLight}
      alt={alt}
      title={title}
    />
  )
}
