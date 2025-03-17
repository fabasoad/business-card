import * as React from 'react'
import { useThemeContext } from '../Contexts/ThemeContext'

export type ThemeImageProps = {
  className?: string,
  imgLight: any,
  imgDark?: any,
  alt: string,
  title: string
}

export default async function ThemeImage({ className, imgLight, imgDark, alt, title }: ThemeImageProps) {
  const { theme } = useThemeContext()

  return (
    <img
      className={className}
      src={theme === 'dark' ? (imgDark ?? imgLight) : imgLight}
      alt={alt}
      title={title}
      loading="lazy"
    />
  )
}
