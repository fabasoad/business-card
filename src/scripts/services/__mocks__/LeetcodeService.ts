import RemoteService from '../RemoteService'
import type { LeetcodeStats } from '../LeetcodeService'

class LeetcodeService implements RemoteService<LeetcodeStats> {
  public async request(): Promise<LeetcodeStats> {
    return Promise.resolve({
      totalSolved: 6,
      easySolved: 3,
      mediumSolved: 2,
      hardSolved: 1
    })
  }
}

const remoteService = new LeetcodeService()
export default remoteService
