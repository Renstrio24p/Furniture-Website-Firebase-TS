import { styles } from "./styles";

export default function Navbar(DOM: HTMLDivElement) {

    DOM.innerHTML = (`
        <ul class='${styles['links-container']}'>
            <li class='${styles['link-item']}'><a href='#/home' id='home' class='${styles.link} ${styles.active}'>Home</a></li>
            <li class='${styles['link-item']}'><a href='#/products' id='products' class='${styles.link}'>Products</a></li>
            <li class='${styles['link-item']}'><a href='#/about' id='about' class='${styles.link}'>About</a></li>
            <li class='${styles['link-item']}'><a href='#/contact' id='contact' class='${styles.link}'>Contact</a></li>
            <li class='${styles['link-item']}'><a href='#/search' id='search' class='${styles.link}'>Search</a></li>
        </ul>
        <div class='${styles['user-interactions']}'>
            <div class='${styles.cart}'>
                <img src='images/cart-white.png' class='${styles['cart-icon']}' alt="cart icon">
                <span class='${styles['cart-item-count']}'>80</span>
            </div>
            <div class='${styles.user}'>
                <a href='#/login'>
                    <img src='images/user-white.png' id='login' class='${styles['user-icon']}' alt='user image'>
                </a>
            </div>
        </div>
    `)

}