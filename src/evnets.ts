import { ProductType } from './types';
import { imageInput, nameInput, smInput, mdInput, lgInput } from './importer.js';

export const handleSubmitProduct = () => {

    const sizeInputs: Array<HTMLInputElement> = [smInput, mdInput, lgInput];
    const seletedSizeInput: HTMLInputElement | null = sizeInputs.find(input => input.checked) ?? null

    const product: ProductType = {
        image: imageInput.value,
        name: nameInput.value,
        size: seletedSizeInput?.id.toLocaleUpperCase() as ProductType['size'] ?? "MD"
    };

    console.log(product);

}