export interface ProductsType {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  rating: { rate: number; count: number };
}

export interface CartProductsType extends ProductsType{
  howMany: number
}
