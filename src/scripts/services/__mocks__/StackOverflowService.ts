import RemoteService from '../RemoteService'
import type { StackOverflowData } from '../StackOverflowService'

export class StackOverflowService implements RemoteService<StackOverflowData> {
  private readonly defaultVal: StackOverflowData

  public constructor(defaultVal: StackOverflowData) {
    this.defaultVal = defaultVal
  }

  public async request(): Promise<StackOverflowData> {
    return Promise.resolve(this.defaultVal)
  }
}
