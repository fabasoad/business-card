import producer from '../../scripts/DevMessageProducer'

describe('DevMessageProducer', () => {
  let consoleLogSpy: jest.SpyInstance

  beforeAll(() => {
    jest.useFakeTimers()
    consoleLogSpy = jest.spyOn(global.console, 'log').mockImplementation()
  })

  test('should build default messages correctly', () => {
    const messages: string[] = producer._messages
    expect(messages).toHaveLength(8)
    new Array<string>(
      'PayPal',
      'Ko-fi',
      'Liberapay',
      'BTC'
    ).forEach((m: string) => expect(messages[messages.length - 1]).toContain<string>(m))
  })

  afterEach(() => {
    consoleLogSpy.mockRestore()
  })
})
