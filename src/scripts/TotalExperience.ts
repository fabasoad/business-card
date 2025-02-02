import { humanize } from './utils/DateUtils'

export interface ITotalExperience {
  humanize(code: string): string
}

type EndDateGetter = () => Date

export default class TotalExperience implements ITotalExperience {
  private static readonly EXPERIENCE_START_DATE: Date = new Date(2010, 2, 1)

  private readonly getEndDate: EndDateGetter

  constructor(endDateGetter: EndDateGetter = () => new Date()) {
    this.getEndDate = endDateGetter
  }

  public humanize(code: string): string {
    return humanize(
      TotalExperience.EXPERIENCE_START_DATE, this.getEndDate(), code)
  }
}
