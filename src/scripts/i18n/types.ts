export class Locale {
  code: string
  title: string

  constructor(code: string, title: string = null) {
    this.code = code
    this.title = title || code
  }
}
