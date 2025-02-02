import * as React from 'react'
import { EducationItemProps } from '../EducationItem'

export default function EducationItem({
  universityKey, universityName, location, img, fromYear, toYear
}: EducationItemProps) {
  return (
    <div data-testid="EducationItem">
      <div data-testid="universityKey">{universityKey}</div>
      <div data-testid="universityName">{universityName}</div>
      <div data-testid="location">{location}</div>
      <img data-testid="img" src={img} alt="img"></img>
      <div data-testid="fromYear">{fromYear}</div>
      <div data-testid="toYear">{toYear}</div>
    </div>
  )
}
