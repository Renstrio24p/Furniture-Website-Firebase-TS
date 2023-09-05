import AboutPage from "../../components/pages/AboutPage";
import ContactPage from "../../components/pages/ContactPage";
import HomePage from "../../components/pages/HomePage";
import ProductPage from "../../components/pages/ProductPage";
import { styles } from "../../components/styles";

export const TS_Router = () => {

    const HomeBTN = document.getElementById('home') as HTMLAnchorElement | null;
    const ProductsBTN = document.getElementById('products') as HTMLAnchorElement | null;
    const AboutBTN = document.getElementById('about') as HTMLAnchorElement | null;
    const ContactBTN = document.getElementById('contact') as HTMLAnchorElement | null;

    const Route = document.getElementById('routes') as HTMLDivElement | null;

    const switchRoute = (pageFunction: (Route: HTMLDivElement) => void) => {
        if (Route) {
            Route.classList.add(styles['transition-page']);

            setTimeout(() => {
                clearInterval(loadingInterval);
                pageFunction(Route as HTMLDivElement);
                Route.classList.remove(styles['transition-page']);
            }, 3000);

            const loadingInterval = setInterval(() => {
                const loadingText = `<img src='images/cart.png'> Loading` + Array.from({ length: 9 }, (_, i) => i < ((Date.now() / 300) % 4) ? '.' : '').join('');
                Route.innerHTML = `<p>${loadingText}</p>`;
            }, 200);
        }
    };

    const menuItems = [HomeBTN,ProductsBTN,AboutBTN,ContactBTN];

    menuItems.forEach((item, index) => {
        if (item) {
            item.addEventListener('click', () => {
                const pages = [HomePage,ProductPage,AboutPage,ContactPage];
                switchRoute(pages[index]);
                menuItems.forEach(menuItem => {
                    if (menuItem) {
                        menuItem.classList.toggle(styles.active, menuItem === item);
                    }
                });
                localStorage.setItem('activePage', index.toString());
            });
        }
    });

    const storedActivePage = localStorage.getItem('activePage');
    if (storedActivePage) {
        const activeIndex = parseInt(storedActivePage);
        const pages = [HomePage,ProductPage,AboutPage,ContactPage];
        switchRoute(pages[activeIndex]);
        menuItems.forEach((menuItem, index) => {
            if (menuItem) {
                menuItem.classList.toggle(styles.active, index === activeIndex);
            }
        });
    } else {
        switchRoute(HomePage);
        if (HomeBTN) {
            HomeBTN.classList.toggle(styles.active, true);
        }
    }
}