import * as moment from 'moment'

export interface IExperienceCalculations {
  totalHumanize(code: string): string
}

export default class ExperienceCalculations implements IExperienceCalculations {
  totalHumanize(code: string): string {
    return this.calculate('2010-03-01', code)
  }

  private calculate(formatDate: string, code: string): string {
    const now: moment.Moment = moment()
    const startWorkDate: moment.Moment = moment(formatDate, 'YYYY-MM-DD')
    return moment.duration(now.diff(startWorkDate)).locale(this.i18nCode(code)).humanize()
  }

  private i18nCode(code: string) {
    switch (code) {
      case 'jp':
        return 'ja'
      case 'ua':
        return 'uk'
      default:
        return code
    }
  }
}
