import { submitEl } from './importer.js';
import { handleSubmitProduct } from './evnets.js';
import { renderProducts } from './create.js';
renderProducts();
submitEl === null || submitEl === void 0 ? void 0 : submitEl.addEventListener("click", handleSubmitProduct);
