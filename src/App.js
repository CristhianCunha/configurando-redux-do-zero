import React, { useState} from 'react';
import { connect } from 'react-redux'
//import { store } from './store'

const App = ({ tasks, addTask }) => {
  const [task, updateTask] = useState('')

  const handleInputChange = event => {
    updateTask(event.target.value)
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    if (task === '') {return 0}
    addTask(task)
    //se não houver nada escrito, parar função
    /*if (task == '') {return 0}
    store.dispatch({
      type: 'ADD_TASK',
      payload: task,
    })*/
    //updateTasks(oldTasks => [...oldTasks, task,])
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

const mapStateToProps = state => ({
  tasks: state,
})

const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch({
    type: 'ADD_TASK',
    payload: task,
  })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  )(App);
