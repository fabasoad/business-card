import { useQuery } from '@tanstack/react-query'
import RemoteService from '../../scripts/services/RemoteService'

export type ServiceFactory<T extends RemoteService<S>, S> = () => T

export type FetchedStats<S> = {
  data: S,
  isLoading: boolean
}

export function useFetchStats<T extends RemoteService<S>, S>(
  factory: ServiceFactory<T, S>
): FetchedStats<S> {
  const service: T = factory()
  const { data, isLoading } = useQuery({
    queryKey: [service.constructor.name],
    queryFn: () => service.request()
  })

  return { data, isLoading }
}
