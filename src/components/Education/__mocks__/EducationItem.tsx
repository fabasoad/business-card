import * as React from 'react'
import { EducationItemProps } from '../EducationItem'

export default function EducationItem({
  universityKey, universityName, location, img, fromYear, toYear
}: EducationItemProps) {
  return (
    <div data-testid={`EducationItem-${universityKey}-${universityName}-${location}-${fromYear}-${toYear}-${img}`}>
    </div>
  )
}
