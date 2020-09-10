import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddExpensePage from '../components/AddExpensePage'
import Header from '../components/Header'
import ExpensesDashboardPage from '../components/ExpensesDashboard'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFound'
import EditExpensePage from '../components/EditExpensePage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpensesDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter