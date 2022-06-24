import DateUtils from './DateUtils'

export interface ITotalExperience {
  humanize(code: string): string
}

export default class TotalExperience implements ITotalExperience {
  private static readonly EXPERIENCE_START_DATE: Date = new Date(2010, 2, 1)

  public humanize(code: string): string {
    return DateUtils.humanize(TotalExperience.EXPERIENCE_START_DATE, new Date(), code)
  }
}
