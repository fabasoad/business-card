import RemoteService from '../RemoteService'

class GitHubService implements RemoteService<number> {
  public async request(): Promise<number> {
    return Promise.resolve(6)
  }
}

const remoteService = new GitHubService()
export default remoteService
