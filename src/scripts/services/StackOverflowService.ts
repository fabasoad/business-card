import State from '../../components/Stats/State'
import RemoteService from './RemoteService'

class StackOverflowService implements RemoteService<number> {
  private state: State = State.NOT_STARTED
  private reputation: number = 0

  private static STACKOVERFLOW_USER_ID = 215523

  public async request(): Promise<number> {
    if (this.state !== State.FINISHED && this.state !== State.STARTED) {
      this.state = State.STARTED
      this.reputation = await fetch(`https://api.stackexchange.com/2.3/users/${StackOverflowService.STACKOVERFLOW_USER_ID}/associated`)
        .then((resp) => resp.json())
        .then((data) => {
          const siteName = 'Stack Overflow'
          for (let i = 0; i < data.items.length; i++) {
            if (data.items[i]['site_name'] === siteName) {
              this.state = State.FINISHED
              return data.items[i]['reputation']
            }
          }
          throw new Error(`There is no "${siteName}" site name in response`)
        })
        .catch(() => {
          this.state = State.FAILED
          return this.reputation
        })
    }
    return Promise.resolve(this.reputation)
  }
}

const remoteService = new StackOverflowService()
export default remoteService
