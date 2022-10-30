import {
  CounterAction,
  CounterActionTypes,
  CounterState,
} from "../actions/counterActions"

let initialState = {
  counter: 0,
} as CounterState

export const counterReducer = (state = initialState, action: CounterAction) => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + action.payload,
      }

    case CounterActionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - action.payload,
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
