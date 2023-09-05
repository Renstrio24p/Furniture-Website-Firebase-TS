import styles from '../../assets/sass/modules/search.module.scss';

export default function SearchPage(DOM: HTMLDivElement){

    document.title = 'Online Store - Search Results';

    DOM.innerHTML = (`
    <section class='${styles['section-listing']}'>
    <h1 class='${styles['section-title']}'>sofas</h1>
    <div class='${styles['product-container']}'>
        <div class='${styles['product-card']}'>
            <img src='images/sofa-1.png' class='${styles['product-img']}' alt='product image'>
            <p class='${styles['product-price']}'>$ 499</p>
        </div>
        <div class='${styles['product-card']}'>
            <img src='images/sofa-2.png' class='${styles['product-img']}' alt='product image'>
            <p class='${styles['product-price']}'>$ 499</p>
        </div>
        <div class='${styles['product-card']}'>
            <img src='images/sofa-3.png' class='${styles['product-img']}' alt='product image'>
            <p class='${styles['product-price']}'>$ 499</p>
        </div>
        <div class='${styles['product-card']}'>
            <img src='images/sofa-4.png' class='${styles['product-img']}' alt='product image'>
            <p class='${styles['product-price']}'>$ 499</p>
        </div>
        <div class='${styles['product-card']}'>
            <img src='images/sofa-5.png' class='${styles['product-img']}' alt='product image'>
            <p class='${styles['product-price']}'>$ 499</p>
        </div>
        <div class='${styles['product-card']}'>
            <img src='images/sofa-6.png' class='${styles['product-img']}' alt='product image'>
            <p class='${styles['product-price']}'>$ 499</p>
        </div>
        <div class='${styles['product-card']}'>
            <img src='images/sofa-7.png' class='${styles['product-img']}' alt='product image'>
            <p class='${styles['product-price']}'>$ 499</p>
        </div>
        <div class='${styles['product-card']}'>
            <img src='images/sofa-8.png' class='${styles['product-img']}' alt='product image'>
            <p class='${styles['product-price']}'>$ 499</p>
        </div>
        <div class='${styles['product-card']}'>
            <img src='images/sofa-9.png' class='${styles['product-img']}' alt='product image'>
            <p class='${styles['product-price']}'>$ 499</p>
        </div>
    </div>
</section>
    `)

}