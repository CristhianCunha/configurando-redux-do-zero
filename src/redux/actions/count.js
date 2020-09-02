import { createAction } from 'redux-actions'

import { types } from '../types/count'

const actions = {
  increaseCount: createAction(types.COUNT_INCREASE_VALUE),
  multiplyCount: createAction(types.COUNT_MULTIPLY_VALUE),
}

export { actions }