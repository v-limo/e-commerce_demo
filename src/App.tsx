import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Product } from "./pages/Product"
import {
  fetchProductsError,
  fetchProductsSuccess,
  fetchProductStart,
} from "./redux/actionCreators/productsActionCreator"
import { RootState } from "./redux/reducers"

import { ProductType } from "./types"

function App() {
  const dispatch = useDispatch()

  const { products } = useSelector((state: RootState) => state.products)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch(fetchProductStart())
        const res = await fetch("https://api.escuelajs.co/api/v1/products")
        const data = (await res.json()) as ProductType[]

        dispatch(fetchProductsSuccess(data))
      } catch (error: any) {
        dispatch(fetchProductsError(error.message))
      }
    }
    fetchProducts()
  }, [dispatch])

  return (
    <div className="flex justify-center p-3 bg-red-200">
      <div className="flex  flex-wrap p-2  justify-center">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default App
