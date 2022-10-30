import { Dispatch } from "redux"
import { CounterAction, CounterActionTypes } from "../actions/counterActions"

export const counterIncrement = (num: number) => {
  return (dispatch: Dispatch<CounterAction>) => {
    dispatch({
      type: CounterActionTypes.INCREMENT,
      payload: num,
    })
  }
}

export const counterDecrement = (num: number) => {
  return (dispatch: Dispatch<CounterAction>) => {
    dispatch({
      type: CounterActionTypes.DECREMENT,
      payload: num,
    })
  }
}

export const counterReset = () => {
  return (dispatch: Dispatch<CounterAction>) => {
    dispatch({
      type: CounterActionTypes.RESET,
    })
  }
}

const counterActionCreator = {
  counterIncrement,
  counterDecrement,
  counterReset,
}

export default counterActionCreator
