import { submitEl } from './importer.js';
import { handleSubmitProduct } from './evnets.js'
import { renderProducts } from './create.js';
renderProducts()
submitEl?.addEventListener("click", handleSubmitProduct)