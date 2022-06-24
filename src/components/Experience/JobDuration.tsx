import * as React from 'react'
import DateUtils from '../../scripts/DateUtils'
import { AppState } from '../../store/configureStore'
import { ThunkDispatch } from 'redux-thunk'
import { AppActions, Locale } from '../../store/locale/types'
import { connect } from 'react-redux'

interface JobDurationProps {
  fromMonth: number
  fromYear: number
  toMonth?: number
  toYear?: number
}

type Props = JobDurationProps & LinkDispatchProps & LinkStateProps

const JobDuration: React.FunctionComponent<Props> =
  ({ fromMonth, fromYear, toMonth, toYear, locale }) => {
    const from: Date = new Date(fromYear, fromMonth)
    const to: Date = !toYear || !toMonth ? new Date() : new Date(toYear, toMonth)
    return (
      <div className="job-duration">{ DateUtils.humanize(from, to, locale.code) }</div>
    )
  }

JobDuration.defaultProps = {
  fromMonth: 0,
  fromYear: 0,
  toMonth: null,
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
