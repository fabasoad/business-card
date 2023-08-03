export enum I18nLanguageCodeFormat {
  ISO_639_1,
  ISO_3166_1_alpha_2
}

export type I18nLanguageCodeTranslatorFunc = (code: string) => string

class I18nLanguageCodeTranslator {
  private readonly formatsISO6391: string[] = ['en', 'ja', 'uk']
  private readonly formatsISO31661Alpha2: string[] = ['gb', 'jp', 'ua']
  private readonly formatsMap: Map<I18nLanguageCodeFormat, string[]> =
    new Map<I18nLanguageCodeFormat, string[]>([
      [I18nLanguageCodeFormat.ISO_639_1, this.formatsISO6391],
      [I18nLanguageCodeFormat.ISO_3166_1_alpha_2, this.formatsISO31661Alpha2],
    ])
  getTranslateFunc(from: I18nLanguageCodeFormat, to: I18nLanguageCodeFormat):
    I18nLanguageCodeTranslatorFunc {
    const fromCodes: string[] = this.formatsMap.get(from)
    const toCodes: string[] = this.formatsMap.get(to)
    const translationMap = new Map<string, string>()
    for (let i = 0; i < fromCodes.length; i++) {
      translationMap.set(fromCodes[i], toCodes[i])
    }
    return (code: string): string => {
      return translationMap.get(code) ?? code
    }
  }
}

const i18nLanguageCodeTranslator = new I18nLanguageCodeTranslator();
export default i18nLanguageCodeTranslator
