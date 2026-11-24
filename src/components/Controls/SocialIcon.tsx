import * as React from 'react'

export type SocialIconProps = {
  url: string,
  icon: string,
  label: string
}

export default function SocialIcon({ url, icon, label }: SocialIconProps) {
  return (
    <a
      className="btn"
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      aria-label={label}
    >
      <i className={`fab ${icon} fa-2x`}></i>
    </a>
  )
}
