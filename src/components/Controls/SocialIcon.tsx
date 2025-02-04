import * as React from 'react'

export type SocialIconProps = {
  url: string,
  icon: string
}

export default function SocialIcon({ url, icon }: SocialIconProps) {
  return (
    <a
      className="btn"
      target="_blank"
      rel="noopener noreferrer"
      href={url}
    >
      <i className={`fab ${icon} fa-2x`}></i>
    </a>
  )
}
