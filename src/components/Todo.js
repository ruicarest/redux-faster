import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, invisibility = true }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    {invisibility}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  invisibility: PropTypes.bool.isRequired
}

export default Todo