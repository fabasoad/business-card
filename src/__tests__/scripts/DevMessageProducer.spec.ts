import DevMessageProducer from '../../scripts/DevMessageProducer'

jest.useFakeTimers()

let consoleLogSpy

beforeAll(() => {
  consoleLogSpy = jest.spyOn(global.console, 'log').mockImplementation()
})

test('should produce all messages on run', () => {
  const messages = ['test-1', 'test-2']
  const producer = new DevMessageProducer(() => messages)
  producer.run()
  producer.run() // to be sure that timer will not run again
  jest.runAllTimers()
  expect(setInterval).toHaveBeenCalledTimes(1)
  expect(setInterval).toHaveBeenCalledWith<number[]>(expect.any(Function), 1500)
  expect(clearInterval).toHaveBeenCalledTimes(1)
  expect(consoleLogSpy).toHaveBeenCalledTimes(2)
  messages.forEach((m, i) =>
    expect(consoleLogSpy).toHaveBeenNthCalledWith<string[]>(i + 1, m)
  )
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
