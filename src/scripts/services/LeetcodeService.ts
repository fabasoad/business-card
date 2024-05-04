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

  private static LEETCODE_URL = 'https://leetcodestats.cyclic.app/fabasoad'

  public constructor(defaultVal: LeetcodeStats) {
    this.stats = defaultVal
  }

  public async request(): Promise<LeetcodeStats> {
    if (this.state !== State.FINISHED && this.state !== State.STARTED) {
      this.state = State.STARTED
      this.stats = await fetch(LeetcodeService.LEETCODE_URL)
        .then((resp) => resp.json())
        .then(({ totalSolved, easySolved, mediumSolved, hardSolved }) => {
          this.state = State.FINISHED
          return {
            totalSolved, easySolved, mediumSolved, hardSolved
          }
        })
        .catch(() => {
          this.state = State.FAILED
          return this.stats
        })
    }
    return Promise.resolve(this.stats)
  }
}
