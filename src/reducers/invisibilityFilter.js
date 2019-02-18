import { InvisibilityFilters } from '../actions'

const invisibilityFilter = (state = InvisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_INVISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default invisibilityFilter