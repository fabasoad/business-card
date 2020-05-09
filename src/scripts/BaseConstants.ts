export default class BaseConstants {
  static readonly BASE_URL: string = process.env.NODE_ENV === 'development' ? '/' : '/business-card'
}
