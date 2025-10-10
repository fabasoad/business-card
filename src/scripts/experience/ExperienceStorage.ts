import * as items from './items.json'
import type { Experience, ExperienceBase } from './types'
import * as imgArka from '../../assets/images/companies/arka-fss.png'
import * as imgLohika from '../../assets/images/companies/lohika.png'
import * as imgBitcoinCom from '../../assets/images/companies/bitcoin-com.png'
import * as imgWbyT from '../../assets/images/companies/wbyt.png'

type ExperienceJSON = ExperienceBase & {
  fromYear: number,
  fromMonthIndex: number,
  toYear?: number,
  toMonthIndex?: number
}

const map = new Map<string, any>([
  ['arka', imgArka],
  ['lohika', imgLohika],
  ['bitcoin-com', imgBitcoinCom],
  ['woven-by-toyota', imgWbyT]
])

class ExperienceStorage {
  private readonly _items: Experience[]

  public constructor() {
    this._items = items
      .sort((a: ExperienceJSON, b: ExperienceJSON) => {
        return b.fromYear - a.fromYear
      })
      .map(({
        id,
        title,
        locationI18nKey,
        techStack,
        fromYear,
        fromMonthIndex,
        toYear,
        toMonthIndex
      }: ExperienceJSON) => ({
        id,
        title,
        locationI18nKey,
        img: map.get(id),
        techStack,
        from: new Date(fromYear, fromMonthIndex),
        to: toYear === undefined
          ? undefined
          : new Date(toYear, toMonthIndex === undefined
            ? 0
            : toMonthIndex)
      }))
  }

  public get items(): Experience[] {
    return this._items
  }
}

const storage = new ExperienceStorage()
export default storage
