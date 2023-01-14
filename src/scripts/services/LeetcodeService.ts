import State from '../../components/Stats/State'

export interface LeetcodeStats {
  totalSolved: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
}

export type LeetcodeLoaded = (stats: LeetcodeStats) => void

export default class LeetcodeService {
  private static instance: LeetcodeService
  private state: State = State.NOT_STARTED
  private stats: LeetcodeStats

  private static LEETCODE_USERNAME: string = 'fabasoad'

  private constructor() {
  }

  public static getInstance(): LeetcodeService {
    if (!LeetcodeService.instance) {
      LeetcodeService.instance = new LeetcodeService()
    }
    return LeetcodeService.instance
  }

  public async getStats(): Promise<LeetcodeStats> {
    if (this.state !== State.FINISHED && this.state !== State.STARTED) {
      this.state = State.STARTED
      this.stats = await fetch(`https://leetcode-stats-api.herokuapp.com/${LeetcodeService.LEETCODE_USERNAME}`)
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
