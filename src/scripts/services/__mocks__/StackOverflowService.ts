import RemoteService from '../RemoteService'
import type { StackExchangeData } from '../StackExchangeService'

export class StackOverflowService implements RemoteService<StackExchangeData> {
  private readonly defaultVal: StackExchangeData

  public constructor(defaultVal: StackExchangeData) {
    this.defaultVal = defaultVal
  }

  public async request(): Promise<StackExchangeData> {
    return Promise.resolve(this.defaultVal)
  }
}
