/* global NodeJS */
class DevMessageProducer {
  _messages: string[]
  _counter: number = 0
  _timer: NodeJS.Timeout

  constructor(
    messagesFactory: () => string[] = DevMessageProducer._defaultMessagesFactory
  ) {
    this._messages = messagesFactory()
  }

  static _defaultMessagesFactory(): string[] {
    const donates: string =
      '* Open Collective: https://opencollective.com/fabasoad\n' +
      '* Ko-fi: https://ko-fi.com/fabasoad\n' +
      '* Liberapay: https://liberapay.com/fabasoad\n' +
      '* IssueHunt: https://issuehunt.io/r/fabasoad\n' +
      '* BTC: https://www.bitcoinqrcodemaker.com/?style=bitcoin&address=145HwyQAcv4vrzUumJhu7nWGAVBysX9jJH&prefix=on'
    return [
      'Hello my curious friend!',
      'I am glad that you are interested in internals of my website',
      'Feel free to take a look at the source code in case you want to see more. Here is the link:',
      '* https://github.com/fabasoad/business-card',
      'Also, feel free to add me in LinkedIn:',
      '* https://www.linkedin.com/in/yevhenfabizhevskyi/',
      'Or if you want to buy me a cup of coffee (I love coffee very much), here are the resources where you can do it:',
      donates
    ]
  }

  run() {
    if (this._timer == null) {
      this._timer = setInterval(() => {
        if (this._counter >= this._messages.length) {
          clearInterval(this._timer)
          this._timer = null
          this._counter = 0
        } else {
          console.log(this._messages[this._counter])
          this._counter++
        }
      }, 1500)
    }
  }
}

const producer = new DevMessageProducer()
export default producer
