import { createSelector } from 'reselect'

const getCount = createSelector (
  state => state.countReducers.count,
  count => count,
)

const selectors = {
  getCount,
}

export { selectors }