import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import SubFooter from './SubFooter'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <SubFooter />
  </div>
)

export default App