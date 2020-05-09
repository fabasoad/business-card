import * as moment from 'moment'

export interface IExperienceCalculations {
  totalHumanize(code: string): string
  agileHumanize(code: string): string
}

export default class ExperienceCalculations implements IExperienceCalculations {
  totalHumanize(code: string): string {
    return this._calculate('2010-03-01', code)
  }

  agileHumanize(code: string): string {
    return this._calculate('2011-10-01', code)
  }

  _calculate(formatDate: string, code: string): string {
    const now: moment.Moment = moment()
    const startWorkDate: moment.Moment = moment(formatDate, 'YYYY-MM-DD')
    return moment.duration(now.diff(startWorkDate)).locale(code).humanize()
  }
}
