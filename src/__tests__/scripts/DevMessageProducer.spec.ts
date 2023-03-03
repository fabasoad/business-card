import producer from '../../scripts/DevMessageProducer'

describe('DevMessageProducer', () => {
  let consoleLogSpy

  beforeAll(() => {
    jest.useFakeTimers()
    consoleLogSpy = jest.spyOn(global.console, 'log').mockImplementation()
  })

  test('should build default messages correctly', () => {
    const messages: string[] = producer._messages
    expect(messages.length).toBe(8)
    new Array<string>(
      'Open Collective',
      'Ko-fi',
      'Liberapay',
      'IssueHunt',
      'BTC'
    ).forEach((m: string) => expect(messages[messages.length - 1]).toContain<string>(m))
  })

  afterEach(() => {
    consoleLogSpy.mockRestore()
  })
})
