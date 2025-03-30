export interface Technology {
  name: string
  title: string
  imgLight?: any
  imgDark?: any
  isSkill?: boolean
}

export interface TechnologyProvider {
  items: Map<string, Technology>
}
