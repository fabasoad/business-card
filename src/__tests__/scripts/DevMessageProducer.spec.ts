import producer from '../../scripts/DevMessageProducer'

describe('DevMessageProducer', () => {
  let consoleLogSpy: jest.SpyInstance

  beforeAll(() => {
    jest.useFakeTimers()
    consoleLogSpy = jest.spyOn(global.console, 'log').mockImplementation()
  })

  test('should build default messages correctly', () => {
    const messages: string[] = producer._messages
    expect(messages.length).toBe(8)
    const sponsorItems = [
      'Open Collective',
      'Ko-fi',
      'Liberapay',
      'IssueHunt',
      'BTC'
    ]
    for (const m of sponsorItems) {
      expect(messages[messages.length - 1]).toContain<string>(m)
    }
  })

  afterEach(() => {
    consoleLogSpy.mockRestore()
  })
})
