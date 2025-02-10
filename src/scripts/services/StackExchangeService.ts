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
  private stats: StackExchangeData
  private readonly siteName: string

  private static STACKOVERFLOW_USER_ID = 215523

  protected constructor(defaultVal: StackExchangeData, siteName: string) {
    this.stats = defaultVal
    this.siteName = siteName
  }

  public async request(): Promise<StackExchangeData> {
    try {
      const response: Response = await fetch(`https://api.stackexchange.com/2.3/users/${StackExchangeService.STACKOVERFLOW_USER_ID}/associated`)
      const data: StackOverflowResponse = await response.json()
      for (const { answer_count, reputation, site_name } of data.items) {
        if (site_name === this.siteName) {
          this.stats = { answerCount: answer_count, reputation }
          break
        }
      }
    } catch (err) {
      console.error((<Error>err).message)
    }
    return this.stats
  }
}
