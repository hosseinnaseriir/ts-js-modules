import { ProductType } from './types';
import { imageInput, nameInput, smInput, mdInput, lgInput, prdoductsEl } from './importer.js';
import { products } from './states.js';
import { box } from './utils.js';

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
    const stringfyProducts = JSON.stringify(products)
    localStorage.setItem("products", stringfyProducts)
}

export const createProductCard = (product: ProductType) => {
    const li = box({
        el: "li",
        children: [
            box({
                el: 'img',
                children: '',
                attr: {
                    src: product.image
                }
            }),
            box({
                el: 'h2',
                children: product.name,
            }),
            box({
                el: 'p',
                children: [
                    'Size:',
                    box({
                        el: 'span',
                        children: product.size
                    })
                ],
            })
        ]
    })
    prdoductsEl.append(li)
}

export const renderProducts = () => {
    const productsListJson = localStorage.getItem("products") ?? "";
    const productsList = productsListJson ? JSON.parse(productsListJson) : [];
    productsList.forEach((product: ProductType) => createProductCard(product));
}