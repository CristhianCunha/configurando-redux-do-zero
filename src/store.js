import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import { reducers } from './redux/reducers'

const middlewares = [
  logger,
]
const store = createStore(
  reducers,
  applyMiddleware(...middlewares,)
  )

export { store }