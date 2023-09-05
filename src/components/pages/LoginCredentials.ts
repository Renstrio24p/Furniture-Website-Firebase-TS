import styles from '../../assets/sass/modules/signup.module.scss';

export default function LoginPage(DOM: HTMLDivElement) {

    DOM.innerHTML = (`
        <section class='${styles['login-section']}'>
            <div id='form-routes'></div>
        </section>
    `)

}