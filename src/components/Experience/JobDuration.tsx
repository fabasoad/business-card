import * as React from 'react'
import DateUtils from '../../scripts/utils/DateUtils'
import { AppState } from '../../store/configureStore'
import { ThunkDispatch } from 'redux-thunk'
import { AppActions, Locale } from '../../store/locale/types'
import { connect } from 'react-redux'

interface JobDurationProps {
  fromMonthIndex: number
  fromYear: number
  toMonthIndex?: number
  toYear?: number
}

type Props = JobDurationProps & LinkDispatchProps & LinkStateProps

const JobDuration: React.FunctionComponent<Props> =
  ({ fromMonthIndex, fromYear, toMonthIndex, toYear, locale }) => {
    const from: Date = new Date(fromYear, fromMonthIndex)
    const to: Date = !toYear || toMonthIndex == undefined
      ? new Date()
      : new Date(toYear, toMonthIndex)
    return (
      <div className="job-duration">{ DateUtils.humanize(from, to, locale.code) }</div>
    )
  }

JobDuration.defaultProps = {
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
  ownProps: JobDurationProps
): LinkStateProps => ({
  locale: state.locale
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: JobDurationProps
): LinkDispatchProps => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobDuration)
