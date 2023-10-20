export type ProductType = {
    image: string;
    name: string;
    size: "SM" | "MD" | "LG"
}

export type ProductsListType = Array<ProductType | null>

export type BoxProps = {
    el?: string;
    children?: Array<string | Node | HTMLElement> | string | HTMLElement | Node;
    attr?: {
        [key: string]: any
    }
}