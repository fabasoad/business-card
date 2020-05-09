import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Locale, AppActions } from '../../store/locale/types'
import { AppState } from '../../store/configureStore'
import DigitConverter from '../../scripts/DigitConverter'

interface DateProps {
  className?: string
  converter?: DigitConverter
  month?: number
  year: number
}

type Props = DateProps & LinkDispatchProps & LinkStateProps

export function DateLocale(props: Props) {
  const { t } = useTranslation()

  const date: string = props.locale.code === 'jp'
    ? props.converter.toDoubleByte(props.year.toString()) + t('business-card-year-singular') + (props.month ? t(`business-card-month-${props.month}`) : '')
    : (props.month ? t(`business-card-month-${props.month}`) + ' ' : '') + props.year

  return (
    <div className={props.className || ''}>{date}</div>
  )
}

DateLocale.defaultProps = {
  converter: new DigitConverter()
}

interface LinkStateProps {
  locale: Locale
}

interface LinkDispatchProps {
}

const mapStateToProps = (
  state: AppState,
  ownProps: DateProps
): LinkStateProps => ({
  locale: state.locale
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: DateProps
): LinkDispatchProps => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateLocale)
