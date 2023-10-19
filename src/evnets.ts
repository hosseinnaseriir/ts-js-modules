
import { createProductFromProdcutForm, saveProduct } from './create.js'

export const handleSubmitProduct = () => {
    const product = createProductFromProdcutForm();
    saveProduct(product);
}
