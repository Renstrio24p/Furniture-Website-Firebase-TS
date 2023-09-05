import styles from '../../assets/sass/modules/404.module.scss'

export default function PageNotFound(DOM: HTMLDivElement){

    document.title = 'Online Store - Page not found'

    DOM.innerHTML = (`
        <section class='${styles['four-o-four-section']}'>
            <div class='${styles.content}'>
                <h1 class='${styles['error']}'>Page doesn't exists</h1>
                <p class='${styles['sub-line']}'>Look's like you are lost. Return our <a href='#/home' id='back'>HomePage</a></p>
            </div>
        </section>
    `)

}