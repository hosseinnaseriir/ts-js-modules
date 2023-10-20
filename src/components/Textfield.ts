import { BoxProps } from "../types.js"
import { box } from "../utils.js"

type TextFieldProps = BoxProps['attr'] & {
    label?: BoxProps['children']
};

export const Textfiled = (props?: TextFieldProps) => {

    const id = crypto.randomUUID();

    return box({
        attr: {
            style: {
                margin: "16px 0",
            },
        },
        children: [
            props?.label ? box({
                el: 'label',
                children: "label",
                attr: {
                    for: props.id ?? id
                }
            }) : "",
            box({
                el: 'input',
                attr: {
                    id,
                    ...props,
                    style: {
                        width: '100%',
                        marginTop: "4px",
                        backgroundColor: "white",
                        color: '#323232',
                        padding: "8px 6px",
                        borderRadius: "6px",
                        border: '2px solid #f95',
                        outline: 'none'
                    },
                }
            })
        ]
    })
}
