import { Octokit } from '@octokit/rest'
import State from '../../components/Stats/State'
import RemoteService from './RemoteService'
import fetch from 'cross-fetch'

export class GitHubService implements RemoteService<number> {
  private state: State = State.NOT_STARTED
  private starsAmount: number

  private static GITHUB_USERNAME = 'fabasoad'

  public constructor(starsAmount: number) {
    this.starsAmount = starsAmount
  }

  public async request(): Promise<number> {
    if (this.state == State.NOT_STARTED) {
      this.state = State.STARTED
      const octokit: Octokit = new Octokit({ request: { fetch } })
      try {
        let sum: number = 0
        let page: number = 1
        const perPage: number = 100
        let length: number = perPage
        while (length === perPage) {
          const { data } = await octokit.rest.repos.listForUser({
            username: GitHubService.GITHUB_USERNAME,
            page,
            per_page: perPage
          })
          length = data.length
          for (let i = 0; i < data.length; i++) {
            sum += data[i]['stargazers_count']
          }
          page++
        }
        this.state = State.FINISHED
        this.starsAmount = sum
      } catch (err) {
        this.state = State.FAILED
      }
    }
    return this.starsAmount
  }
}
