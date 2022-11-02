import {
  ProductAction,
  ProductActionTypes,
  ProductState,
} from "../actions/productsActions"

let innitialState = {
  products: [],
  loading: false,
  error: null,
} as ProductState

export const productsReducer = (
  state = innitialState,
  action: ProductAction
) => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        loading: true,
      }
    case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      }
    case ProductActionTypes.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
