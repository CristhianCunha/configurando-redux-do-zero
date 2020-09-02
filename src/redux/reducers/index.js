import { combineReducers } from 'redux'

import { reducers as countReducers } from './count'
import { reducers as todoReducers } from './todo'


const reducers = combineReducers({
  todoReducers,
  countReducers,
})

export { reducers }