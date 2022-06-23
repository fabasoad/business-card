import * as React from 'react'
import DateUtils from '../../scripts/DateUtils'
import { AppState } from '../../store/configureStore'
import { ThunkDispatch } from 'redux-thunk'
import { AppActions, Locale } from '../../store/locale/types'
import { connect } from 'react-redux'

interface JobDurationProps {
  from: Date
  to: Date
}

type Props = JobDurationProps & LinkDispatchProps & LinkStateProps

const JobDuration: React.FunctionComponent<Props> =
  ({ from, to, locale }) => {
    return (
      <div className="job-duration">{ DateUtils.humanize(from, to, locale.code) }</div>
    )
  }

JobDuration.defaultProps = {
  from: new Date(),
  to: new Date()
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
