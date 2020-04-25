export default class DevMessageProducer {

  _donates = {
    'Open Collective': 'https://opencollective.com/fabasoad',
    'Ko-fi': 'https://ko-fi.com/fabasoad',
    'Liberapay': 'https://liberapay.com/fabasoad',
    'IssueHunt': 'https://issuehunt.io/r/fabasoad',
    'BTC': 'https://en.cryptobadges.io/donate/145HwyQAcv4vrzUumJhu7nWGAVBysX9jJH'
  }

  _prettyDonates() {
    return Object.keys(this._donates)
      .map(key => `* ${key}: ${this._donates[key]}`)
      .join('\n');
  }

  _messages: string[] = [
    'Hey! So, you are opening a Developer Tools..',
    'Okay.',
    'What are you looking for here?',
    "It's one page serverless application.",
    "Hosted on GitHub Pages. Written in TypeScript + React.",
    "So, I don't think you can find anything interesting here ;)",
    "But if you want to take a look on the code closer, here is the repo:\n* https://github.com/fabasoad/business-card",
    "If you wanna hire me, contact me in LinkedIn and we can have a chat:\n* https://www.linkedin.com/in/yevhenfabizhevskyi/",
    `Or if you want to buy me a cup of coffee (I love coffee very much), here are the resources where you can do it:\n${this._prettyDonates()}`
  ];
  _counter: number = 0;
  _timer: NodeJS.Timeout;

  _reset() {
    clearInterval(this._timer);
    this._timer = null;
    this._counter = 0;
  }

  run() {
    this._timer = setInterval(() => {
      if (this._counter >= this._messages.length) {
        this._reset();
      } else {
        console.log(this._messages[this._counter]);
        this._counter++;
      }
    }, 1500);
  }
}