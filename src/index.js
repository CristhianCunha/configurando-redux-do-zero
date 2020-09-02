import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Tasks from './Tasks'
import Contador from './Contador'
import FormCount from './FormCount'
import { store } from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Contador />
      <Tasks />
      <FormCount />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)