import { ProductType } from './types';
import { imageInput, nameInput, smInput, mdInput, lgInput } from './importer.js';
import { products } from './states.js';

export const createProductFromProdcutForm = (): ProductType => {
    const sizeInputs: Array<HTMLInputElement> = [smInput, mdInput, lgInput];
    const seletedSizeInput: HTMLInputElement | null = sizeInputs.find(input => input.checked) ?? null
    return {
        image: imageInput.value,
        name: nameInput.value,
        size: seletedSizeInput?.id.toLocaleUpperCase() as ProductType['size'] ?? "MD"
    };
}

export const saveProduct = (product: ProductType) => {
    products.push(product);
    console.log(products);
}