export default class StringUtils {
  public static random(end?: number): string {
    return Math.random().toString(36).substring(2, end)
  }
}
