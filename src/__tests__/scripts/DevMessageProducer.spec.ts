import DevMessageProducer from '../../scripts/DevMessageProducer'

describe('DevMessageProducer', () => {
  let consoleLogSpy

  beforeAll(() => {
    jest.useFakeTimers()
    consoleLogSpy = jest.spyOn(global.console, 'log').mockImplementation()
  })

  test('should build default messages correctly', () => {
    const messages: string[] = new DevMessageProducer()._messages
    expect(messages.length).toBe(9)
    new Array<string>(
      'Open Collective',
      'Ko-fi',
      'Liberapay',
      'IssueHunt',
      'BTC'
    ).forEach((m) => expect(messages[messages.length - 1]).toContain<string>(m))
  })

  afterEach(() => {
    consoleLogSpy.mockRestore()
  })
})
