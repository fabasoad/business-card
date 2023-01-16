import { Octokit } from '@octokit/rest'
import State from '../../components/Stats/State'
import RemoteService from './RemoteService'

export default class GitHubService implements RemoteService<number> {
  private state: State = State.NOT_STARTED
  private starsAmount: number = 0

  private static GITHUB_USERNAME = 'fabasoad'

  public async request(): Promise<number> {
    if (this.state == State.NOT_STARTED) {
      this.state = State.STARTED
      const octokit: Octokit = new Octokit();
      this.starsAmount = await octokit.rest.repos.listForUser({
        username: GitHubService.GITHUB_USERNAME
      }).then(({ data }) => {
        let res: number = 0
        for (let i = 0; i < data.length; i++) {
          res += data[i]['stargazers_count']
        }
        this.state = State.FINISHED
        return res
      })
    }
    return Promise.resolve(this.starsAmount)
  }
}
