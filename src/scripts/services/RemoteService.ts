export default interface RemoteService<T> {
  readonly queryKey: string
  request(): Promise<T>
}
