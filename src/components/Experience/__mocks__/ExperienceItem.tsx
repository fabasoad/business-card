import * as React from 'react'
import type { ExperienceItemProps } from '../ExperienceItem'

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  const { id, title, locationI18nKey, techStack, img, from, to } = experience
  return (
    <div data-testid={`ExperienceItem-${id}-${locationI18nKey}-${from.toDateString()}-${to === undefined ? 'Present' : to.toDateString()}-${img}`}>
      <div data-testid="title">${title}</div>
      <div data-testid="techStack">${techStack.join(',')}</div>
    </div>
  )
}
