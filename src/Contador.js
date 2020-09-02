import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { actions } from './redux/actions/count'
import { selectors } from './redux/selectors/count'

const Contador = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectors.getCount)

  const increaseValue = action => {
    dispatch(actions.increaseCount(action))
  }

  const multiplyValue = action => {
    dispatch(actions.multiplyCount(action))
  }

  return (
    <>
    <button onClick={() => increaseValue(1)} >+</button>
    <button onClick={() => multiplyValue(2)}>Multiplicar por 2</button>
    <h1>{count}</h1>
    <button onClick={() => increaseValue(-1)}>-</button>
    <button onClick={() => multiplyValue(0.5)}>Dividir por 2</button>
    </>
  )
}

export default Contador