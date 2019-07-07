import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import axios from 'axios'
import rootReducer from './reducers'
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk


export const GOT_CANDIES = 'GOT_CANDIES'
export const ADD_CANDIES = 'ADD_CANDIES'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const subtract = (amount) =>  ({
  type: DECREMENT,
  amount
})

export const addition = (amount) =>  ({
  type: INCREMENT,
  amount
})


export const gotCandy = (candy) => ({
  type: GOT_CANDIES,
  candy
})

export const addCandy = (candy) => ({
  type: ADD_CANDIES,
  payload: candy
})

export function getCandy(){
  return async function(dispatch){
    try{
      const responseFromServer= await axios.get('/api/candies')
      const candy = responseFromServer.data
      dispatch(gotCandy(candy))
    } catch(error){
      console.log(error)
    }
  }
}

export function addMoreCandy(newCandy){
  return async function(dispatch){
    try{
      console.log('candy:', newCandy)
      const responseFromServer= await axios.post('/api/candies', newCandy)
      const candy = responseFromServer.data
      console.log(candy)
      dispatch(addCandy(candy))
    } catch(error){
      console.log("Didn't work", error)
    }
  }
}


export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    // `withExtraArgument` gives us access to axios in our async action creators!
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
    thunkMiddleware.withExtraArgument({axios}),
    loggingMiddleware
  ))
)
