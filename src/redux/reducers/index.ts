import { combineReducers } from "redux"
import { cartReducer } from "./cartReducer"
import { counterReducer } from "./counterReducer"
import { productsReducer } from "./productsReducer"
const rootReducer = combineReducers({
  count: counterReducer,
  cart: cartReducer,
  products: productsReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
