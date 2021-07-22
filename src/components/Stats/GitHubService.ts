import {Octokit} from '@octokit/rest';
import State from './State';

export default class GitHubService {
  private static instance: GitHubService
  private state: State = State.NOT_STARTED
  private starsAmount: number = 0

  private constructor() {
  }

  public static getInstance(): GitHubService {
    if (!GitHubService.instance) {
      GitHubService.instance = new GitHubService()
    }
    return GitHubService.instance
  }

  public async getTotalStarsAmount(): Promise<number> {
    if (this.state == State.NOT_STARTED) {
      this.state = State.STARTED
      const octokit: Octokit = new Octokit();
      return octokit.rest.repos.listForUser({
        username: 'fabasoad'
      }).then(({data}) => {
        let res: number = 0
        for (let i = 0; i < data.length; i++) {
          res += data[i]['stargazers_count']
        }
        this.state = State.FINISHED
        this.starsAmount = res
        return res
      })
    }
    return new Promise(() => this.starsAmount)
  }
}
