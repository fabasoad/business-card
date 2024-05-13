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
        const { data } = await octokit.rest.repos.listForUser({
          username: GitHubService.GITHUB_USERNAME
        })
        let sum: number = 0
        for (let i = 0; i < data.length; i++) {
          sum += data[i]['stargazers_count']
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
