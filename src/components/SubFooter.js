import React from 'react'
import FilterCon from '../containers/FilterCon'
import { InvisibilityFilters } from '../actions'

const SubFooter = () => (
  <div>
    <span>Don't Show: </span>
    <FilterCon filter={InvisibilityFilters.SHOW_NONE}>
    None
    </FilterCon>
  </div>
)

export default SubFooter
