import State from './State';

export default class StackOverflowService {
  private static instance: StackOverflowService
  private state: State = State.NOT_STARTED
  private reputation: number = 0

  private constructor() {
  }

  public static getInstance(): StackOverflowService {
    if (!StackOverflowService.instance) {
      StackOverflowService.instance = new StackOverflowService()
    }
    return StackOverflowService.instance
  }

  public async getReputation(): Promise<number> {
    if (this.state == State.NOT_STARTED) {
      this.state = State.STARTED
      const userId: number = 215523;
      return fetch(`https://api.stackexchange.com/2.3/users/${userId}/associated`)
        .then((resp) => resp.json())
        .then((data) => {
          for (let i = 0; i < data.items.length; i++) {
            if (data.items[i]['site_name'] === 'Stack Overflow') {
              this.reputation = data.items[i]['reputation']
              this.state = State.FINISHED
              return this.reputation
            }
          }
        })
    }
    return new Promise(() => this.reputation)
  }
}
