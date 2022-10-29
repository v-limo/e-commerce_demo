export interface ProductType {
  id: number
  title: string
  price: number
  description: string
  category: Category
  images: string[]
  categoryId?: number
}

export interface Category {
  id: number
  name: Name
  image: string
  keyLoremSpace?: KeyLoremSpace
}

export enum KeyLoremSpace {
  Fashion = "fashion",
  Shoes = "shoes",
  Watch = "watch",
}

export enum Name {
  Clothes = "Clothes",
  Electronics = "Electronics",
  Furniture = "Furniture",
  Others = "Others",
  Shoes = "Shoes",
}

export interface ProductProps {
  product: ProductType
}
