type BoxProps = {
    el?: string;
    children: Array<string | Node | HTMLElement> | string | HTMLElement | Node;
    attr?: {
        [key: string]: any
    }
}

export const box = (props: BoxProps): HTMLElement => {
    const el = document.createElement(props.el ?? "div");
    if (props.children && Array.isArray(props.children)) el.append(...props.children)
    else el.append(props.children);
    if (props.attr) {
        Object.keys(props.attr).forEach(key => {
            el.setAttribute(key, props.attr![key])
        })
    }
    return el;
}
