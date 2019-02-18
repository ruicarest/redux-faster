import { connect } from 'react-redux'
import { toggleTodo, InvisibilityFilters } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'
import invisibilityFilter from '../reducers/invisibilityFilter';

const getVisibleTodos = (todos, filter, filtercons) => {
  switch (filtercons) {
    case InvisibilityFilters.SHOW_NONE:
      return null
    default:
  }
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter, state.invisibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)