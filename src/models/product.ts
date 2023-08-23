import { CategoryDTO } from "./category";

export type ProductsDTO = {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    categories: CategoryDTO[];
}