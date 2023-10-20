
import { createProductFromProdcutForm, saveProduct, renderProducts } from './create.js'

export const handleSubmitProduct = () => {
    const product = createProductFromProdcutForm();
    saveProduct(product);
    renderProducts()
}
