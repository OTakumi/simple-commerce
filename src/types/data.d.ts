// product category
export const Category = 'shoes' | 'clothes' | 'book'
// product condition
export const Condition = 'new' | 'used'

// User
export const User = {
  id: number,
  username: string,
  displayName: string,
  email: string,
  profileImageUrl: string,
  description: string,
}

// Products
export const Products = {
  id: number,
  category: Category,
  title: string,
  description: string,
  imageUrl: string,
  blurDataUrl: string,
  price: number,
  condition: Condition,
  owner: User,
}

// API Context
export const ApiContext = {
  apiRootUrl: string,
}
