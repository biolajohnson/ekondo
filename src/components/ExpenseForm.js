import React from 'react'
import moment from 'moment'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'


class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      error: '',
      calenderfocused: false
    }
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calenderfocused: focused
    }))
  }
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({
        createdAt
      }))
    }
  }
  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }
  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({
      description
    }))
  }
  onAmountChange = (e) => {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount
      }))
    }
  }
  onSubmit = (e) => {
    e.preventDefault()
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: 'Please insert values! '
      }))
    } else {
      this.setState(() => ({
        error: ''
      }))
      //add expense to state
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
      console.log(this.state)
    }

  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
            placeholder="Description" />
          <input
            type="text"
            value={this.state.amount}
            onChange={this.onAmountChange}
            placeholder="Amount" />
          <textarea
            type="text"
            value={this.state.note}
            onChange={this.onNoteChange}
            placeholder="Add notes here (optional)" />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderfocused}
            onFocusChange={this.onFocusChange}
            isOutsideRange={() => false}
            numberOfMonths={1} />

          <button>{this.props.buttonText}</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm
