import React from 'react'

import TodoNew from './components/TodoNew'
import TodoList from './components/TodoList'
import TodoShow from './components/TodoShow'

function App() {
  return (
    <>
    <div className = "container">
      <h2 className = "text-center mt-3">To do</h2>
      <div className="row mt-3">
        <div className="col-md-2"></div>
        <div className="col">
        <TodoList />
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col mt-3">
        <TodoNew />
        </div>
        <div className="col-md-2"></div>
      </div>

      

    </div>
    </>
  )
}

export default App;
