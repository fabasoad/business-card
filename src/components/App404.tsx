/* global NodeJS */
import * as React from 'react'
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

  const isRedirectingStyle = (flag: boolean) => ({ display: `${isRedirecting === flag ? 'inline' : 'none'}` })

  const { i18n, t } = useTranslation()

  return (
    <div className={`container d-flex font-regular font-${i18n.language === 'jp' ? '' : 'non-'}jp`}>
      <div className="row">
        <div className="col-12">{t('404.text.1')}</div>
        <div className="col-12">
          <span className="blinker-prefix"></span>
          {/* JP: 画面をクリックして続ける */}
          &nbsp;{t('404.text.2')}<span style={isRedirectingStyle(true)}>.</span>
          <span style={isRedirectingStyle(false)} className="blinker">_</span>
        </div>
        <div className="col-12" style={isRedirectingStyle(true)}>
          {t('404.text.3')}
          <span>{counter}</span>
          <span className="blinker">_</span>
        </div>
      </div>
    </div>
  )
}
