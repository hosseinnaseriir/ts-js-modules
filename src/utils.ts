import { BoxProps } from "./types";


export const box = (props: BoxProps): HTMLElement => {
    const el = document.createElement(props.el ?? "div");
    if (props.children && Array.isArray(props.children)) el.append(...props.children)
    if (props.children && !Array.isArray(props.children)) el.append(props.children);
    if (props.attr) {
        Object.keys(props.attr).forEach(key => {
            if (key.startsWith("on")) {
                return el.addEventListener(key.slice(2).toLowerCase(), props.attr![key])
            }
            if (key === "style") {
                return Object.entries(props.attr![key]).forEach(styleEntiti => {
                    // @ts-ignore
                    el.style[styleEntiti[0]] = styleEntiti[1]
                })
            };
            el.setAttribute(key, props.attr![key])
        })
    }
    return el;
}
