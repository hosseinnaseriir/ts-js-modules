export type ProductType = {
    image: string;
    name: string;
    size: "SM" | "MD" | "LG"
}

export type ProductsListType = Array<ProductType | null>