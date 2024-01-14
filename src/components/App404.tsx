/* global NodeJS */
import * as React from 'react'
import BaseConstants from '../scripts/BaseConstants'
import { WithTranslation, withTranslation } from 'react-i18next'

interface App404Props {
  redirectUrl?: string
}

function App404({ i18n, t, redirectUrl }: WithTranslation & App404Props) {
  let timer: NodeJS.Timeout
  let counterValue: number = 3

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

  return (
    <div className={`font-regular font-${i18n.language === 'jp' ? '' : 'non-'}jp`}>
      <p>
        <>{t('business-card-404-text-1')}</>
      </p>
      <p>
        <>
          <span className="blinker-prefix"></span>
          {/* JP: 画面をクリックして続ける */}
          &nbsp;{t('business-card-404-text-2')}<span style={isRedirectingStyle(true)}>.</span>
          <span style={isRedirectingStyle(false)} className="blinker">_</span>
        </>
      </p>
      <p style={isRedirectingStyle(true)}>
        <>
          {t('business-card-404-text-3')}
          <span>{counter}</span>
          <span className="blinker">_</span>
        </>
      </p>
    </div>
  )
}

App404.defaultProps = {
  redirectUrl: BaseConstants.BASE_URL
}

export default withTranslation()(App404)
