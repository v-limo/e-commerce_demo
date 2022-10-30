import { ProductType } from "../../types"

export enum cartActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  RESET_CART = "RESET_CART",
}

export interface Cart extends ProductType {
  quantity: number
}

export type CartState = {
  cart: Cart[]
}

export type ADD_TO_CART = {
  type: cartActionTypes.ADD_TO_CART
  payload: ProductType
}

export type REMOVE_FROM_CART = {
  type: cartActionTypes.REMOVE_FROM_CART
  payload: ProductType
}

export type RESET_CART = {
  type: cartActionTypes.RESET_CART
}

export type CartAction = ADD_TO_CART | REMOVE_FROM_CART | RESET_CART
