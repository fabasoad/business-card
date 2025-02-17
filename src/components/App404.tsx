/* global NodeJS */
import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BaseConstants from '../scripts/BaseConstants'
import { useTranslation } from 'react-i18next'

interface App404Props {
  redirectUrl?: string
}

export default function App404({ redirectUrl = BaseConstants.BASE_URL }: App404Props) {
  let timer: NodeJS.Timeout
  let counterValue = 3

  const [isRedirecting, setIsRedirecting] = React.useState<boolean>(false)
  const [counter, setCounter] = React.useState<number>(counterValue)

  document.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault()
    setIsRedirecting(true)
    timer = setInterval(() => {
      if (counterValue == 1) {
        clearInterval(timer)
        window.location.replace(redirectUrl)
      } else {
        counterValue--
        setCounter(counterValue)
      }
    }, 1000)
  })

  const { i18n, t } = useTranslation()

  return (
    <Container className={`d-flex font-regular font-${i18n.language === 'jp' ? '' : 'non-'}jp`}>
      <Row>
        <Col>{t('404.text.1')}</Col>
        <Col>
          <span className="blinker-prefix"></span>
          {/* JP: 画面をクリックして続ける */}
          &nbsp;{t('404.text.2')}<span data-redirecting={isRedirecting}>.</span>
          <span data-redirecting={!isRedirecting} className="blinker">_</span>
        </Col>
        <Col data-redirecting={isRedirecting}>
          {t('404.text.3')}
          <span>{counter}</span>
          <span className="blinker">_</span>
        </Col>
      </Row>
    </Container>
  )
}
