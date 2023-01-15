export default interface RemoteService<T> {
  request(): Promise<T>
}
