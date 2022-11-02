import { RootState } from "./../reducers/index"
import { ProductType } from "../../types"
import { ProductActionTypes } from "../actions/productsActions"
import { Dispatch } from "redux"

export const fetchProductStart = () => {
  return {
    type: ProductActionTypes.FETCH_PRODUCTS,
  }
}

export const fetchProductsSuccess = (products: ProductType[]) => {
  return {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: products,
  }
}

export const fetchProductsError = (error: string) => {
  return {
    type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
    payload: error,
  }
}

export const fetchProductThubk = (url: string) => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    dispatch(fetchProductStart())
    fetch(url)
      .then((res) => res.json())
      .then((data: ProductType[]) => {
        dispatch(fetchProductsSuccess(data))
      })
      .catch((err) => {
        dispatch(fetchProductsError(err.message))
      })
  }
}

export const productsActionCreator = {
  fetchProductStart,
  fetchProductsSuccess,
  fetchProductsError,
}

export default productsActionCreator
