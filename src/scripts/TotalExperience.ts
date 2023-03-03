import { humanize } from './utils/DateUtils'

export interface ITotalExperience {
  humanize(code: string): string
}

type EndDateGenerator = () => Date

export default class TotalExperience implements ITotalExperience {
  private static readonly EXPERIENCE_START_DATE: Date = new Date(2010, 2, 1)

  private readonly endDateGenerator: EndDateGenerator

  constructor(endDateGenerator: EndDateGenerator = () => new Date()) {
    this.endDateGenerator = endDateGenerator
  }

  public humanize(code: string): string {
    return humanize(
      TotalExperience.EXPERIENCE_START_DATE, this.endDateGenerator(), code)
  }
}
