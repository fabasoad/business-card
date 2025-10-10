export function randomString(end?: number): string {
  return Math.random().toString(36).substring(2, end)
}
