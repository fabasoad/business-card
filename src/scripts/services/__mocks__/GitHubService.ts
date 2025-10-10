import type RemoteService from '../RemoteService'

export class GitHubService implements RemoteService<number> {
  public actual: number

  public constructor(v: number) {
    this.actual = v
  }

  public request(): Promise<number> {
    return Promise.resolve(this.actual)
  }
}
