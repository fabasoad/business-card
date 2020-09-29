import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Locale, AppActions } from '../store/locale/types'
import { AppState } from '../store/configureStore'
import BaseConstants from '../scripts/BaseConstants'

interface App404Props {
  redirectUrl: string
}

type Props = App404Props & LinkDispatchProps & LinkStateProps

export function App404(props: Props) {
  const { t } = useTranslation()

  // eslint-disable-next-line no-undef
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
        window.location.replace(props.redirectUrl)
      } else {
        counterValue--
        setCounter(counterValue)
      }
    }, 1000)
  })

  const isRedirectingStyle = (flag: boolean) => ({ display: `${isRedirecting === flag ? 'inline' : 'none'}` })

  return (
    <div className={`font-regular font-${props.locale.code === 'jp' ? '' : 'non-'}jp`}>
      <p>{t('business-card-404-text-1')}</p>
      <p>
        <span className="blinker-prefix"></span>
        {/* JP: 画面をクリックして続ける */}
        &nbsp;{t('business-card-404-text-2')}<span style={isRedirectingStyle(true)}>.</span>
        <span style={isRedirectingStyle(false)} className="blinker">_</span>
      </p>
      <p style={isRedirectingStyle(true)}>{t('business-card-404-text-3')}<span>{counter}</span><span className="blinker">_</span></p>
    </div>
  )
}

App404.defaultProps = {
  redirectUrl: BaseConstants.BASE_URL
}

interface LinkStateProps {
  locale: Locale
}

interface LinkDispatchProps {
}

const mapStateToProps = (
  state: AppState,
  ownProps: App404Props
): LinkStateProps => ({
  locale: state.locale
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: App404Props
): LinkDispatchProps => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App404)
