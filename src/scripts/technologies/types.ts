export interface Technology {
  name: string
  title: string
  img?: any
  isSkill?: boolean
}

export interface TechnologyProvider {
  items: Map<string, Technology>
}
