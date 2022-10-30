import { CartAction, cartActionTypes, CartState } from "../actions/cartActions"

let innitialState = {
  cart: [],
} as CartState

export const cartReducer = (state = innitialState, action: CartAction) => {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      if (state.cart.some((item) => item.id === action.payload.id)) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        }
      }

    case cartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      }

    case cartActionTypes.RESET_CART:
      return {
        ...state,
        cart: [],
      }

    default:
      return state
  }
}
