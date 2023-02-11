import * as React from 'react'
import DateUtils from '../../scripts/utils/DateUtils'
import { AppState } from '../../store/configureStore'
import { ThunkDispatch } from 'redux-thunk'
import { AppActions, Locale } from '../../store/locale/types'
import { connect } from 'react-redux'

interface DateDurationProps {
  fromMonthIndex: number
  fromYear: number
  toMonthIndex?: number
  toYear?: number
}

type Props = DateDurationProps & LinkDispatchProps & LinkStateProps

const DateDuration: React.FunctionComponent<Props> =
  ({ fromMonthIndex, fromYear, toMonthIndex, toYear, locale }) => {
    const from = new Date(fromYear, fromMonthIndex)
    const to = !toYear || toMonthIndex == undefined
      ? new Date()
      : new Date(toYear, toMonthIndex)
    return (
      <div className="controls__date-duration">
        {DateUtils.humanize(from, to, locale.code)}
      </div>
    )
  }

DateDuration.defaultProps = {
  fromMonthIndex: 0,
  fromYear: 0,
  toMonthIndex: null,
  toYear: null
}

interface LinkStateProps {
  locale: Locale
}

interface LinkDispatchProps {
}

const mapStateToProps = (
  state: AppState,
  ownProps: DateDurationProps
): LinkStateProps => ({
  locale: state.locale
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: DateDurationProps
): LinkDispatchProps => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateDuration)
