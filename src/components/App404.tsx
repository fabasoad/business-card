import * as React from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Locale, AppActions } from '../store/locale/types'
import { AppState } from '../store/configureStore'

interface AppProps {
}

type Props = AppProps & LinkDispatchProps & LinkStateProps

export function App404(props: Props) {
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
        window.location.replace('/')
      } else {
        counterValue--
        setCounter(counterValue)
      }
    }, 1000)
  })

  const isRedirectingStyle = (flag: boolean) => ({ display: `${isRedirecting === flag ? 'inline' : 'none'}` })

  return (
    <div className={`font-regular font-${props.locale.code === 'jp' ? '' : 'non-'}jp`}>
      <p>This page does not exist.</p>
      <p><span className="blinker-prefix"></span> on a screen to continue<span style={isRedirectingStyle(false)} className="blinker">_</span></p>
      <p style={isRedirectingStyle(true)}>Redirecting...<span>{counter}</span><span className="blinker">_</span></p>
    </div>
  )
}

interface LinkStateProps {
  locale: Locale
}

interface LinkDispatchProps {
}

const mapStateToProps = (
  state: AppState,
  ownProps: AppProps
): LinkStateProps => ({
  locale: state.locale
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: AppProps
): LinkDispatchProps => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App404)
