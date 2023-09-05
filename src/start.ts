import Render from "./assets/render/render";
import { TS_Router } from "./assets/routes/router";
import Home_Function from "./components/functions/home";
import { styles } from "./components/styles";


export default function Start(start: HTMLElement): void {
    start.innerHTML = (`
        <nav id='navbar' class='${styles.navbar}'></nav>
        <main id='routes'></main>
    `)

    Render();
    TS_Router();
  }
  
