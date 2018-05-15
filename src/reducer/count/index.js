import { ADD , REDUCE } from './action'

const initialState = 0

export default (state = initialState,action) => {
  switch(action.type) {
    case ADD: 
      return ++state
    case REDUCE:
      return --state
    default:
      return state
  } 
}