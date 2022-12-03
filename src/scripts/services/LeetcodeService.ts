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
  private readonly stats: LeetcodeStats

  private static LEETCODE_USERNAME: string = 'fabasoad'

  private constructor() {
    this.stats = {
      totalSolved: 171,
      easySolved: 81,
      mediumSolved: 88,
      hardSolved: 2
    }
  }

  public static getInstance(): LeetcodeService {
    if (!LeetcodeService.instance) {
      LeetcodeService.instance = new LeetcodeService()
    }
    return LeetcodeService.instance
  }

  public async getStats(): Promise<LeetcodeStats> {
    // TODO: replace with working code
    // if (this.state === State.NOT_STARTED || this.state === State.FAILED) {
    //   this.state = State.STARTED
    //   return fetch(`https://leetcode-stats-api.herokuapp.com/${LeetcodeService.LEETCODE_USERNAME}`)
    //     .then((resp) => resp.json())
    //     .then(({ totalSolved, easySolved, mediumSolved, hardSolved }) => this.stats = {
    //       totalSolved, easySolved, mediumSolved, hardSolved
    //     })
    //     .catch(() => {
    //       this.state = State.FAILED
    //       return this.stats
    //     })
    // }
    return Promise.resolve(this.stats)
  }
}
