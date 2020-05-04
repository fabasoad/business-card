export default class DigitConverter {

  toDoubleByte(num: string): string {
    const rex = /[0-9]/g; 
    return num.replace(rex, (ch) => String.fromCharCode(ch.charCodeAt(0) + 65248));
  }

  toSingleByte(num: string): string {
    const rex = /[\uFF10-\uFF19]/g; 
    return num.replace(rex, (ch) => String.fromCharCode(ch.charCodeAt(0) - 65248));
  }
}