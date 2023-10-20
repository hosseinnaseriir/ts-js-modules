import { box } from "../utils.js"
import { Textfiled } from "./Textfield.js"

export const ProductForm = () => {

    const formData = {
        image: "",
        name: ""
    }

    return box({
        el: 'div',
        children: [
            Textfiled({
                label: "image",
                placeholder: "product image",
                onKeyUp: (e: Event) => formData.image = (e.target as HTMLInputElement).value,
            }),
            Textfiled({
                placeholder: "product name",
                onKeyUp: (e: Event) => formData.name = (e.target as HTMLInputElement).value,
            }),
            box({
                el: 'button',
                children: "submit",
                attr: {
                    onClick: () => console.log(formData),
                }
            })
        ]
    })
}