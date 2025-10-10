import * as React from 'react'
import type { ThemeImageProps } from '../ThemeImage'

export default function ThemeImage({
  className, imgDark, imgLight, alt, title
}: ThemeImageProps) {
  return (
    <div data-testid={`ThemeImage-${alt}`}>
      {`${className}-${imgDark}-${imgLight}-${title}`}
    </div>
  )
}
