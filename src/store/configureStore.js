import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import filterReducer from '../reducers/filters'
import expensesReducer from '../reducers/expenses'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}