import RemoteService from '../RemoteService'

export class GitHubService implements RemoteService<number> {
  private readonly defaultVal: number

  public constructor(defaultVal: number) {
    this.defaultVal = defaultVal
  }

  public async request(): Promise<number> {
    return Promise.resolve(this.defaultVal)
  }
}
