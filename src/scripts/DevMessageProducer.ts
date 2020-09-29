export default class DevMessageProducer {
  _messages: string[]
  _counter: number = 0
  // eslint-disable-next-line no-undef
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
      '* BTC: https://en.cryptobadges.io/donate/145HwyQAcv4vrzUumJhu7nWGAVBysX9jJH'
    return [
      'Hey! So, you are opening a Developer Tools..',
      'Okay.',
      'What are you looking for here?',
      'It\'s one page serverless application.',
      'Hosted on GitHub Pages. Written in TypeScript + React.',
      'So, I don\'t think you can find anything interesting here )',
      'But if you want to take a look on the code closer, here is the repo:\n* https://github.com/fabasoad/business-card',
      'If you wanna hire me, contact me in LinkedIn and we can have a chat:\n* https://www.linkedin.com/in/yevhenfabizhevskyi/',
      `Or if you want to buy me a cup of coffee (I love coffee very much), here are the resources where you can do it:\n${donates}`
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
