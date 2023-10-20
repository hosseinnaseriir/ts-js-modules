import { ProductForm } from "../components/ProductForm.js"
import { box } from "../utils.js"



export const App = () => {
    return box({
        el: 'div',
        children: [ProductForm()]
    })
}