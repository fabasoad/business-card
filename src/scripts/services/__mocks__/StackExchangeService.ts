import RemoteService from '../RemoteService'
import type { StackExchangeData } from '../StackExchangeService'

export class StackExchangeService implements RemoteService<StackExchangeData> {
  private readonly defaultVal: StackExchangeData

  public constructor(defaultVal: StackExchangeData, siteName: string) {
    this.defaultVal = defaultVal
  }

  public async request(): Promise<StackExchangeData> {
    return Promise.resolve(this.defaultVal)
  }
}
