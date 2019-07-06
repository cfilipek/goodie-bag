import {GOT_CANDIES, ADD_CANDIES} from '../store'


const initialState = {
  candy: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES:
    return {...state, candy: [...state, ...action.candy]}
    case ADD_CANDIES:
    return {...state, candy: [...state.candy, ...action.payload]}
    default:
      return state
  }
}

export default rootReducer
