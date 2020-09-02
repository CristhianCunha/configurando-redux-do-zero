import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { actions } from './redux/actions/todo'
import { selectors } from './redux/selectors/todo'

const Tasks = () => {
  const [task, updateTask] = useState('')
  const dispatch = useDispatch()
  const tasks = useSelector(selectors.getTasks)

  const handleInputChange = event => {
    updateTask(event.target.value)
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    if (task == '') return 0
    dispatch(actions.addTask(task))
    updateTask('')
  }

  return (
    <>
      <form onSubmit={handleFormSubmit} >
        <input onChange={handleInputChange} value={task} />
        <button>Add</button>
      </form>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </>
  )
}

export default Tasks;
