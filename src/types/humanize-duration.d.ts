declare module 'humanize-duration' {
  export interface HumanizerOptions {
    delimiter?: string
    fallbacks?: string[]
    language?: string
    largest?: number
    round?: boolean
    units?: string[]
  }

  export default function humanizeDuration(
    value: number,
    options?: HumanizerOptions
  ): string
}
