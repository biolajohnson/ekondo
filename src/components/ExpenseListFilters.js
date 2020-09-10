import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate
} from '../actions/filters'

class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null
  }
  onSortByChange = (e) => {
    e.target.value === 'date' ? this.props.sortByDate : this.sortByAmount
  }
  onFocusChange = (calenderFocused) => {
    this.setState(() => ({
      calenderFocused
    }))
  }
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value)
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange} />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortByChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          startDateId={'ekondo-start-date'}
          endDateId={'ekondo-end-date'}
          showClearDates={true}
        />

      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  filters: state.filters
})

const mapDispatchToProps = (dispatch, props) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate())
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)