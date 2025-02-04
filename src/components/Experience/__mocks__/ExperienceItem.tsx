import * as React from 'react'
import { ExperienceItemProps } from '../ExperienceItem'

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  const { id, title, locationI18nKey, techStack, img, from, to } = experience
  return (
    <div data-testid={id}>
      <div data-testid="title">{title}</div>
      <div data-testid="locationI18nKey">{locationI18nKey}</div>
      <div data-testid="techStack">{techStack.join(',')}</div>
      <img data-testid="img" src={img} alt="img"></img>
      <div data-testid="from">{from.toDateString()}</div>
      <div data-testid="to">{to === undefined ? 'Present' : to.toDateString()}</div>
    </div>
  )
}
