import * as gb from '../assets/i18n/gb.json'
import * as jp from '../assets/i18n/jp.json'
import * as ru from '../assets/i18n/ru.json'
import * as ua from '../assets/i18n/ua.json'

describe('Localization files', () => {
  test('keys should be identical', () => {
    const gbKeys: string = JSON.stringify(Object.keys(gb).sort())
    const jpKeys: string = JSON.stringify(Object.keys(jp).sort())
    const ruKeys: string = JSON.stringify(Object.keys(ru).sort())
    const uaKeys: string = JSON.stringify(Object.keys(ua).sort())
    expect(uaKeys === jpKeys).toBeTruthy()
    expect(jpKeys === ruKeys).toBeTruthy()
    expect(ruKeys === gbKeys).toBeTruthy()
  })
})
