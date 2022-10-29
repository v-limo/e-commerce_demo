import { ProductProps } from "../types"

export const Product = ({ product }: ProductProps) => {
  return (
    <div className="flex flex-col shadow-lg rounded-xl p-2 h-auto w-1/4 m-4  bg-red-100 hover:shadow-5xl hover:bg-white">
      <img
        className="w-full shadow-md rounded-sm p-0 m-0 hover:shadow-5xl"
        // src={product.images[Math.floor(Math.random() * product.images.length)]}
        src={product.images[0]}
        alt={product.title}
      />
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base"> {product.description}</p>
      </div>
      <span>
        <span className="font-bold mb-2 text-2xl underline m-5 text-red-400">${product.price}</span>
        <span className="text-gray-700 text-base"> USD</span>
      </span>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-400">
          {product.category.name}
        </span>
      </div>
      <div className="flex justify-around flex-end ">
        <button
          className="bg-blue-400 hover:bg-blue-500 text-white p-1 rounded"
          onClick={() => {}}
        >
          Add to cart
        </button>
        <button
          className="bg-blue-400 hover:bg-blue-500 text-white p-1 rounded"
          onClick={() => {}}
        >
          More details
        </button>
      </div>
    </div>
  )
}
