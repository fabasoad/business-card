import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Locale, AppActions } from '../../store/locale/types'
import { AppState } from '../../store/configureStore'
import DigitConverter from '../../scripts/DigitConverter'

interface DateProps {
  monthIndex?: number
  year: number
}

type Props = DateProps & LinkDispatchProps & LinkStateProps

export function DateLocale({ locale, monthIndex, year }: Props) {
  const { t } = useTranslation()
  const converter = new DigitConverter()

  const date: string = locale?.code === 'jp'
    ? converter.toDoubleByte(year.toString()) + t('business-card-year-singular') + (monthIndex != undefined ? t(`business-card-month-${monthIndex}`) : '')
    : (monthIndex != undefined ? t(`business-card-month-${monthIndex}`) + ' ' : '') + year

  return (
    <>{date}</>
  )
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
