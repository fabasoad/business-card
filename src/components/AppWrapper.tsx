import * as React from 'react'
import { useEffect } from 'react'
import LoadingSpinner from './LoadingSpinner'
import i18nService, {I18nServiceCallbackTypes} from '../scripts/i18n/I18nService'
import Error from './Controls/Error';
import {Row} from 'react-bootstrap';

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
  useEffect(() => {
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
        <Error>
          <Row>Failed to load i18n settings</Row>
          <Row><a target="_blank" rel="noopener noreferrer" href="https://github.com/fabasoad/business-card/issues/new/choose">Please raise GitHub issue</a></Row>
        </Error>
      )
  }
}
