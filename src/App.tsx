import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Home } from "./pages/Home"
import { Product } from "./pages/Product"
import { fetchProductThubk } from "./redux/actionCreators/productsActionCreator"
import { RootState } from "./redux/reducers"

function App() {
  const dispatch = useDispatch()

  const { products } = useSelector((state: RootState) => state.products)

  useEffect(() => {
    dispatch(
      fetchProductThubk("https://api.escuelajs.co/api/v1/products") as any
    )
  }, [dispatch])

  return (
    <div className="flex flex-col justify-center p-3 bg-red-200">
      <Home />
      <div className="flex  flex-wrap p-2  justify-center">
        {products.length > 0 &&
          products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
}

export default App
