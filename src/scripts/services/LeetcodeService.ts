import State from '../../components/Stats/State'
import RemoteService from './RemoteService'
import fetch from 'cross-fetch'

export interface LeetcodeStats {
  totalSolved: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
}

export class LeetcodeService implements RemoteService<LeetcodeStats> {
  private state: State = State.NOT_STARTED
  private stats: LeetcodeStats

  private static LEETCODE_URL = 'https://leetcode-stats-api.herokuapp.com/fabasoad'

  public constructor(defaultVal: LeetcodeStats) {
    this.stats = defaultVal
  }

  public async request(): Promise<LeetcodeStats> {
    if (this.state !== State.FINISHED && this.state !== State.STARTED) {
      this.state = State.STARTED
      try {
        const resp: Response = await fetch(LeetcodeService.LEETCODE_URL)
        const { totalSolved, easySolved, mediumSolved, hardSolved } = await resp.json()
        this.state = State.FINISHED
        this.stats = { totalSolved, easySolved, mediumSolved, hardSolved }
      } catch (err) {
        this.state = State.FAILED
      }
    }
    return this.stats
  }
}
