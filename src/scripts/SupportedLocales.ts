export class Locale {
  code : string;
  title : string;

  constructor(code : string, title : string = null) {
    this.code = code;
    this.title = ` ${title || code}`;
  }
}

export default class SupportedLocales {

  static _items : Locale[] = [
    new Locale('gb', 'en'),
    new Locale('ru')/*,
    new Locale('jp', 'jp (beta)')*/
  ];

  static default() : Locale {
    return SupportedLocales._items[0];
  }

  static items() : Locale[] {
    return SupportedLocales._items;
  }

  static getOrDefault(code : string) : Locale {
    return SupportedLocales._items.find(l => l.code === code) || SupportedLocales.default();
  }

  static getExceptOf(code) : Locale[] {
    return SupportedLocales._items.filter(l => l.code !== code);
  }
}
