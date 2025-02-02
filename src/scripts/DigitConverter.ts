export default class DigitConverter {
  public toDoubleByte(num: string): string {
    return this._convert(num, /[0-9]/g)
  }

  public toSingleByte(num: string): string {
    return this._convert(num, /[\uFF10-\uFF19]/g, -1)
  }

  private _convert(num: string, regExp: RegExp, delta: number = 1) {
    return num.replace(regExp, (ch) => String.fromCharCode(ch.charCodeAt(0) + (delta * 65248)))
  }
}
