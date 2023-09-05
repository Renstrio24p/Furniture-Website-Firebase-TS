import { styles } from "./styles";

export default function Header(DOM: HTMLDivElement) {

    DOM.innerHTML = `
        <h1 class='${styles['header-heading']}'><span>premium </span>quality</h1>
    `

}