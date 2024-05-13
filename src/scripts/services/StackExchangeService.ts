import RemoteService from './RemoteService'
import fetch from 'cross-fetch'

type StackOverflowResponse = {
  items: { answer_count: number, reputation: number, site_name: string }[]
}

export type StackExchangeData = {
  reputation?: number,
  answerCount?: number
}

export abstract class StackExchangeService implements RemoteService<StackExchangeData> {
  private readonly defaultVal: StackExchangeData
  private readonly siteName: string

  private static STACKOVERFLOW_USER_ID = 215523

  protected constructor(defaultVal: StackExchangeData, siteName: string) {
    this.defaultVal = defaultVal
    this.siteName = siteName
  }

  public async request(): Promise<StackExchangeData> {
    const response: Response = await fetch(`https://api.stackexchange.com/2.3/users/${StackExchangeService.STACKOVERFLOW_USER_ID}/associated`)
    const data: StackOverflowResponse = await response.json()
    for (let i = 0; i < data.items.length; i++) {
      if (data.items[i].site_name === this.siteName) {
        return {
          answerCount: data.items[i].answer_count,
          reputation: data.items[i].reputation
        }
      }
    }
    return this.defaultVal
  }
}
