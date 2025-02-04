import * as React from 'react'
import { SocialIconProps } from '../SocialIcon'

export default function SocialIcon({ url, icon }: SocialIconProps) {
  return (
    <div data-testid={icon}>{url}</div>
  )
}
