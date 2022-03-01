import State from './State';

export default class LeetcodeService {
  private static instance: LeetcodeService
  private state: State = State.NOT_STARTED
  private totalSolved: number = 0

  private static LEETCODE_USERNAME: string = 'fabasoad'

  private constructor() {
  }

  public static getInstance(): LeetcodeService {
    if (!LeetcodeService.instance) {
      LeetcodeService.instance = new LeetcodeService()
    }
    return LeetcodeService.instance
  }

  public async getTotalSolved(): Promise<number> {
    if (this.state === State.NOT_STARTED || this.state === State.FAILED) {
      this.state = State.STARTED
      return fetch(`https://leetcode-stats-api.herokuapp.com/${LeetcodeService.LEETCODE_USERNAME}`)
        .then((resp) => resp.json())
        .then(({ totalSolved }) => totalSolved)
        .catch(() => {
          this.state = State.FAILED
          return this.totalSolved
        })
    }
    return new Promise(() => this.totalSolved)
  }
}
