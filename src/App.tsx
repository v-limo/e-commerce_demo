import { useEffect, useState } from "react"
import { Product } from "./pages/Product"
import { ProductType } from "./types"

function App() {
  const [products, setProducts] = useState<ProductType[]>([])

  const fetchProducts = async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/products")
    const data = (await res.json()) as ProductType[]
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

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
