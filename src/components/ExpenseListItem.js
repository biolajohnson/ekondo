import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const ExpenseListItem = ({ description, amount, id, createdAt }) => (
   <div>
      <Link to={`edit/${id}`}>
         <h3>{description}</h3>
      </Link>
      <p>{amount} - {moment(createdAt).format('Do MMMM YYYY')}</p>
   </div>
)

export default ExpenseListItem