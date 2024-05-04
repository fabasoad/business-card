import { Octokit } from '@octokit/rest'
import State from '../../components/Stats/State'
import RemoteService from './RemoteService'
import fetch from 'cross-fetch'

class GitHubService implements RemoteService<number> {
  private state: State = State.NOT_STARTED
  private starsAmount: number = 0

  private static GITHUB_USERNAME = 'fabasoad'

  public async request(): Promise<number> {
    if (this.state == State.NOT_STARTED) {
      this.state = State.STARTED
      const octokit: Octokit = new Octokit({ request: { fetch } });
      this.starsAmount = await octokit.rest.repos.listForUser({
        username: GitHubService.GITHUB_USERNAME
      }).then(({ data }) => {
        let res: number = 0
        for (let i = 0; i < data.length; i++) {
          res += data[i]['stargazers_count']
        }
        this.state = State.FINISHED
        return res
      }).catch((reason) => {
        console.log(reason)
        this.state = State.FAILED
        return 47;
      })
    }
    return Promise.resolve(this.starsAmount)
  }
}

const remoteService = new GitHubService()
export default remoteService
