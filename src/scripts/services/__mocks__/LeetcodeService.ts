import type RemoteService from '../RemoteService'
import type { LeetcodeStats } from '../LeetcodeService'

export class LeetcodeService implements RemoteService<LeetcodeStats> {
  public stats: LeetcodeStats

  public constructor(v: LeetcodeStats) {
    this.stats = v
  }

  public async request(): Promise<LeetcodeStats> {
    return Promise.resolve(this.stats)
  }
}
