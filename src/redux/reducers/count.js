import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

import { actions } from '../actions/count'

const count = handleActions({
  [actions.increaseCount]: (state,action) => state+action.payload,
  [actions.multiplyCount]: (state,action) => state*action.payload,
}, 0)

const reducers = combineReducers({
  count,
})

export { reducers }