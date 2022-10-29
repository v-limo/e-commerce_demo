import { CounterActionTypes } from "../actions/counterActions"

export const counterIncrement = (payload: number) => {
  return {
    type: CounterActionTypes.INCREMENT,
    payload,
  }
}

export const counterDecrement = (payload: number) => {
  return {
    type: CounterActionTypes.DECREMENT,
    payload,
  }
}

export const counterReset = () => {
  return {
    type: CounterActionTypes.RESET,
  }
}
