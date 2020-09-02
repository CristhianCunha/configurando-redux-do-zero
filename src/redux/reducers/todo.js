import { combineReducers } from 'redux'

import { types } from '../types/todo'

const tasks = (state = [], action) => {
  switch (action.type) {
    case types.TODO_ADD_TASK:
      return [
        ...state,
        action.payload,
      ]
      break;
  
    default:
      return state
      break;
  }
}
const reducers = combineReducers({
  tasks,
})

export { reducers }