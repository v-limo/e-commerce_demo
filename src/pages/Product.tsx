import { ProductProps } from "../types"

export const Product = ({ product }: ProductProps) => {
  return (
    <div className="flex flex-col shadow-lg rounded-lg p-3 h-auto w-1/4 m-6  bg-slate-400 hover:shadow-xl">
      <img
        className="w-full shadow-md"
        // src={product.images[Math.floor(Math.random() * product.images.length)]}
        src={product.images[0]}
        alt={product.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base"> {product.description}</p>
      </div>
      <span>
        <span className="font-bold mb-2 text-3xl">${product.price}</span>
        <span className="text-gray-700 text-base"> USD</span>
      </span>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {product.category.name}
        </span>
        <div className="flex justify-between self-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white p-1 rounded">
            Add to cart
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white p-1 rounded">
            More details
          </button>
        </div>
      </div>
    </div>
  )
}
