import { ProductType } from "../../types"
import { cartActionTypes } from "../actions/cartActions"

export const cartActionCreator = {
  addToCart: (product: ProductType) => ({
    type: cartActionTypes.ADD_TO_CART,
    payload: product,
  }),

  
  removeFromCart: (product: ProductType) => ({
    type: cartActionTypes.REMOVE_FROM_CART,
    payload: product,
  }),


  resetCart: () => ({
    type: cartActionTypes.RESET_CART,
  }),
}
