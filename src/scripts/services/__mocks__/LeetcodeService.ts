import RemoteService from '../RemoteService'
import type { LeetcodeStats } from '../LeetcodeService'

export class LeetcodeService implements RemoteService<LeetcodeStats> {
  private readonly defaultVal: LeetcodeStats

  public constructor(defaultVal: LeetcodeStats) {
    this.defaultVal = defaultVal
  }

  public async request(): Promise<LeetcodeStats> {
    return Promise.resolve(this.defaultVal)
  }
}
