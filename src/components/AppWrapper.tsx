import * as React from 'react'
import Error from './Controls/Error'
import LoadingSpinner from './LoadingSpinner'
import i18nService, { I18nServiceCallbackTypes } from '../scripts/i18n/I18nService'
import producer from '../scripts/DevMessageProducer'

enum Status {
  LOADING,
  FINISHED,
  ERROR
}

export default function AppWrapper({ children }: React.PropsWithChildren<{}>) {
  const [status, setStatus] = React.useState<Status>(Status.LOADING)
  i18nService.registerCallback(
    I18nServiceCallbackTypes.ON_LOADED,
    () => setStatus(Status.FINISHED)
  )

  producer.run()

  React.useEffect(() => {
    i18nService.load().catch((e: any) => {
      setStatus(Status.ERROR)
      console.error(e)
    })
  }, [])

  switch (status) {
    case Status.LOADING:
      return <LoadingSpinner />
    case Status.FINISHED:
      return <>{children}</>
    default:
      return (
        <Error title="Failed to load i18n settings">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/fabasoad/business-card/issues/new/choose">Please raise GitHub issue</a>
        </Error>
      )
  }
}
