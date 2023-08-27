interface FurnitureData {
  _id: string;
  title: string;
  supplier: string;
  imageURL: string;
  description: string;
  product_location: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
interface ProductCardViewProps {
  item: FurnitureData;
}
export { FurnitureData, ProductCardViewProps };
