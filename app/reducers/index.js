import {GOT_CANDIES, ADD_CANDIES, INCREMENT, DECREMENT} from '../store'


const initialState = {
  candy: [],
  number: 0
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES:
    return {...state, candy: [...state, ...action.candy]}
    case ADD_CANDIES:
    return {...state, candy: [...state.candy, ...action.payload]}
    case INCREMENT:
      return {...state, number: state.candy.quantity + action.amount}
      case DECREMENT:
      return {...state, number: state.candy.quantity - action.amount}
    default:
      return state
  }
}

export default rootReducer
