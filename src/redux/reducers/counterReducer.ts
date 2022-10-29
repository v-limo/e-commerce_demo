import { CounterAction, CounterActionTypes } from "../actions/counterActions"

let initialState = {
  counter: 0,
}

export const counterReducer = (state = initialState, action: CounterAction) => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      }

    case CounterActionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      }
    case CounterActionTypes.RESET:
      return {
        ...state,
        counter: 0,
      }

    default:
      return state
  }
}
