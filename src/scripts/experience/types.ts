export type ExperienceBase = {
  id: string,
  title: string,
  locationI18nKey: string,
  techStack: string[]
}

export type Experience = ExperienceBase & {
  img: any
  from: Date,
  to?: Date
}
