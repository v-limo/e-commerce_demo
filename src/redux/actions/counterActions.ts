export enum CounterActionTypes {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  RESET = "RESET",
}

export type INCREMENT = {
  type: CounterActionTypes.INCREMENT
  payload: number
}

export type DECREMENT = {
  type: CounterActionTypes.DECREMENT
  payload: number
}

export type RESET = {
  type: CounterActionTypes.RESET
}

export type CounterState = {
  counter: number
}

export type CounterAction = INCREMENT | DECREMENT | RESET
