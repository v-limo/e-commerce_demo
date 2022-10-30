import { Product } from "../../pages/Product"
import { ProductType } from "../../types"

export enum ProductActionTypes {
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
}

export type FETCH_PRODUCTS = {
  type: ProductActionTypes.FETCH_PRODUCTS
}

export type FETCH_PRODUCTS_SUCCESS = {
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS
  payload: ProductType[]
}

export type FETCH_PRODUCTS_ERROR = {
  type: ProductActionTypes.FETCH_PRODUCTS_ERROR
  payload: string
}

export type ProductState = {
  products: ProductType[]
  loading: boolean
  error: string | null
}

export type ProductAction =
  | FETCH_PRODUCTS
  | FETCH_PRODUCTS_SUCCESS
  | FETCH_PRODUCTS_ERROR
