import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { actions } from './redux/actions/count'
import { selectors } from './redux/selectors/count'

const FormCount = () => {
  const [value, updateValue] = useState(0)

  const dispatch = useDispatch()
  const count = useSelector(selectors.getCount)

  const handleInputChange = (event) => {
    updateValue(event.target.value)
  }

  const multiplierValue = (multiplier) => {
    updateValue(value*multiplier)
    
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    //se não houver nada escrito, parar função
    dispatch(actions.addValue(value))
    updateValue(0)
  }


  return (
    <>
      <h2>{count}</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" pattern="[0-9]*" 
          onChange={handleInputChange}
          value={value}/>
        <button onClick={() => multiplierValue(1)} >Adicionar Valor</button>
        <button onClick={() => multiplierValue(-1)} >Subtrair Valor</button>
      </form>
    </>
  )
}

export default FormCount