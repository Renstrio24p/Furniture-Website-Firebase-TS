import AboutPage from "../../components/pages/AboutPage";
import ContactPage from "../../components/pages/ContactPage";
import HomePage from "../../components/pages/HomePage";
import ProductPage from "../../components/pages/ProductPage";
import SearchPage from "../../components/pages/SearchPage";
import { styles } from "../../components/styles";
import PageNotFound from "../../components/pages/404Page";
import LoginPage from "../../components/pages/LoginCredentials";

// Typescript Routing System

export const TS_Router = () => {
  const HomeBTN = document.getElementById('home') as HTMLAnchorElement | null;
  const ProductsBTN = document.getElementById('products') as HTMLAnchorElement | null;
  const AboutBTN = document.getElementById('about') as HTMLAnchorElement | null;
  const ContactBTN = document.getElementById('contact') as HTMLAnchorElement | null;
  const SearchBTN = document.getElementById('search') as HTMLAnchorElement | null;
  const BackBTN = document.getElementById('back') as HTMLAnchorElement | null;
  const SignUpBTN = document.getElementById('login') as HTMLImageElement | null;

  const Route = document.getElementById('routes') as HTMLDivElement | null;

  // Check if the page is being reloaded with the URL hash '#/home'
  if (window.location.hash === '#/home') {
    // Replace the URL hash with just '#'
    window.location.replace('#/home');
  }

  const switchRoute = (pageFunction: (Route: HTMLDivElement) => void) => {
    if (Route) {
      Route.classList.add(styles['transition-page']);

      setTimeout(() => {
        clearInterval(loadingInterval);
        pageFunction(Route as HTMLDivElement);
        Route.classList.remove(styles['transition-page']);
      }, 3000);

      const loadingInterval = setInterval(() => {
        const loadingText = `<img src='images/cart.png'> Loading` + Array.from({ length: 9 }, (_, i) =>
          i < (Date.now() / 300) % 4 ? '.' : ''
        ).join('');
        Route.innerHTML = `<p>${loadingText}</p>`;
      }, 200);
    }
  };

  const menuItems = [HomeBTN, ProductsBTN, AboutBTN, ContactBTN, SearchBTN,SignUpBTN];

  const pages = [HomePage, ProductPage, AboutPage, ContactPage, SearchPage,LoginPage, PageNotFound];

  const routeToPage = (index: number) => {
    // Check if the selected page index is within the range of available pages
    if (index >= 0 && index < pages.length) {
      switchRoute((Route: HTMLDivElement) => {
        pages[index](Route); 
      });
    } else {
      // If index is out of range, show the 404 page
      switchRoute((Route: HTMLDivElement) => {
        PageNotFound(Route); // Call the 404 page component function with Route as an argument
      });
    }
  };

  menuItems.forEach((item, index) => {
    if (item) {
      item.addEventListener('click', () => {
        // Check if the selected page index is within the range of available pages
        if (index >= 0 && index < pages.length) {
          routeToPage(index);
        } else {
          // If index is out of range, show the 404 page
          routeToPage(pages.length - 1);
        }

        menuItems.forEach((menuItem) => {
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
    // Check if the stored active index is within the range of available pages
    if (activeIndex >= 0 && activeIndex < pages.length) {
      routeToPage(activeIndex);
    } else if (activeIndex === 7) {
      // If the stored active index is 7, show the 404 page
      routeToPage(pages.length - 1);
    }
    menuItems.forEach((menuItem, index) => {
      if (menuItem) {
        menuItem.classList.toggle(styles.active, index === activeIndex);
      }
    });
  } else {
    routeToPage(0); // Default to the first page
    if (HomeBTN) {
      HomeBTN.classList.toggle(styles.active, true);
    }
  }

  // Monitor URL changes
  window.onpopstate = (event) => {
    const hash = window.location.hash;
    // Determine the index based on the URL or default to the 404 page
    let index;
    if (hash === '#/home') {
      index = 0;
    } else if (hash === "#/products") {
      index = 1;
    } else if (hash === "#/about") {
      index = 2;
    } else if (hash === "#/contact") {
      index = 3;
    } else if (hash === "#/search") {
      index = 4;
    } else if(hash === '#/login'){
      index = 5;
    } else {
        hash === '#';
      index = 7; // Default to the 404 page when the URL doesn't match any of the expected values
    }
    routeToPage(index);

    menuItems.forEach((menuItem) => {
      if (menuItem) {
        menuItem.classList.toggle(styles.active, false);
      }
    });

    if (menuItems[index]) {
      menuItems[index]?.classList.toggle(styles.active, true);
    }
  };

  if (BackBTN) {
    BackBTN.addEventListener('click', () => {
      // Route back to the homepage when the "Back" button is clicked
      routeToPage(0);
      menuItems.forEach((menuItem) => {
        if (menuItem) {
          menuItem.classList.toggle(styles.active, menuItem === HomeBTN);
        }
      });
      localStorage.setItem('activePage', '0'); // Update the active page in local storage to the homepage
    });
  }
  
  
  

};
