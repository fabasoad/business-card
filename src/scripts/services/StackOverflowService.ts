import State from '../../components/Stats/State'
import RemoteService from './RemoteService'

type StackOverflowServiceData = {
  reputation: number,
  answerCount: number
}

export type StackOverflowData = {
  stackOverflow: StackOverflowServiceData,
  superUser: StackOverflowServiceData
}

class StackOverflowService implements RemoteService<StackOverflowData> {
  private cache: StackOverflowData | undefined

  private static STACKOVERFLOW_USER_ID = 215523

  public async request(): Promise<StackOverflowData> {
    if (!this.cache) {
      this.cache = await fetch(`https://api.stackexchange.com/2.3/users/${StackOverflowService.STACKOVERFLOW_USER_ID}/associated`)
        .then((resp) => resp.json())
        .then((data) => {
          let flag: boolean = false
          let stackOverflow: StackOverflowServiceData
          let superUser: StackOverflowServiceData
          for (let i = 0; i < data.items.length; i++) {
            if (data.items[i]['site_name'] === 'Stack Overflow') {
              flag = true
              stackOverflow = {
                answerCount: data.items[i]['answer_count'],
                reputation: data.items[i]['reputation']
              }
            } else if (data.items[i]['site_name'] === 'Super User') {
              flag = true
              superUser = {
                answerCount: data.items[i]['answer_count'],
                reputation: data.items[i]['reputation']
              }
            }
          }
          if (!flag) {
            throw new Error('Response does not have required information')
          }
          return { stackOverflow, superUser }
        })
        .catch(() => ({
          stackOverflow: {
            answerCount: 0,
            reputation: 0
          },
          superUser: {
            answerCount: 0,
            reputation: 0
          }
        }))
    }
    return Promise.resolve(this.cache)
  }
}

const remoteService = new StackOverflowService()
export default remoteService
