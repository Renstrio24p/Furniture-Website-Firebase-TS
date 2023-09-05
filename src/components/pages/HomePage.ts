import Footer from "../Footer";
import Header from "../Header";
import Home_Function from "../functions/home";
import { styles } from "../styles";

export default function HomePage(DOM: HTMLDivElement) {

    document.title = 'Online Store - Home'

    DOM.innerHTML = (`
    <header id='header' class='${styles['header-section']}'></header>
        <section class='${styles['best-selling-products-section']}'>
            <h1 class='${styles['section-title']}'>best selling products</h1>
            <div class='${styles['product-container']}'>
                <div class='${styles['product-card']}'>
                    <img src='images/product-1.png' class='${styles['product-img']}' alt='product image'>
                    <p class='${styles['product-name']}'>lights →</p>
                </div>
                <div class='${styles['product-card']}'>
                    <img src='images/product-2.png' class='${styles['product-img']}' alt='product image'>
                    <p class='${styles['product-name']}'>table →</p>
                </div>
                <div class='${styles['product-card']}'>
                    <img src='images/product-3.png' class='${styles['product-img']}' alt='product image'>
                    <p class='${styles['product-name']}'>storage →</p>
                </div>
                <div class='${styles['product-card']}'>
                    <img src='images/product-4.png' class='${styles['product-img']}' alt='product image'>
                    <p class='${styles['product-name']}'>sofa →</p>
                </div>
            </div>
        </section>

        <section class='${styles['mid-section']}'>
            <div class='${styles['section-item-container']}'>
                <img src='images/bg-2.png' class='${styles['section-bg']}' alt='bg image'>
                <div class='${styles['section-info']}'>
                    <h1 class='${styles.title}'>premium quality in <span>affordable</span></h1>
                    <p class='${styles.info}'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dicta ipsum fuga, magnam numquam, iste ex pariatur error 
                        ad maxime vero, accusamus provident nulla hic quia!
                    </p>
                </div>
            </div>
        </section>

        <section class='${styles['image-mid-section']}'>
            <div class='${styles['image-collage']}'>
                <div class='${styles['image-collection']}'>
                    <img src='images/poster-1.png' class='${styles['collage-img']}' alt='collage image'>
                    <img src='images/poster-2.png' class='${styles['collage-img']}' alt='collage image'>
                    <img src='images/poster-3.png' class='${styles['collage-img']}' alt='collage image'>
                </div>
            </div>
        </section>

        <section class='${styles['review-section']}'>
            <h1 class='${styles['section-title']}'>what our <span>customers</span> says about us </h1>
            <div class='${styles['review-container']}'>
                <div class='${styles['review-card']}'>
                    <div class='${styles['user-dp']}' data-rating='4.9'>
                        <img src='images/user 1.png' alt='user1'>
                    </div>
                    <h2 class='${styles['review-title']}'>best quality more than my expectations</h2>
                    <p class='${styles.review}'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sit pariatur libero labore aspernatur reprehenderit odio.
                    </p>
                </div>
                <div class='${styles['review-card']}'>
                    <div class='${styles['user-dp']}' data-rating='4.9'>
                        <img src='images/user 2.png' alt='user1'>
                    </div>
                    <h2 class='${styles['review-title']}'>on time delivery with best packaging.</h2>
                    <p class='${styles.review}'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sit pariatur libero labore aspernatur reprehenderit odio.
                    </p>
                </div>
                <div class='${styles['review-card']}'>
                    <div class='${styles['user-dp']}' data-rating='4.9'>
                        <img src='images/user 3.png' alt='user1'>
                    </div>
                    <h2 class='${styles['review-title']}'>very helpful customer support</h2>
                    <p class='${styles.review}'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sit pariatur libero labore aspernatur reprehenderit odio.
                    </p>
                </div>
                <div class='${styles['review-card']}'>
                    <div class='${styles['user-dp']}' data-rating='4.9'>
                        <img src='images/user 4.png' alt='user1'>
                    </div>
                    <h2 class='${styles['review-title']}'>very easy to refund/return products.</h2>
                    <p class='${styles.review}'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sit pariatur libero labore aspernatur reprehenderit odio.
                    </p>
                </div>
            </div>
        </section>

        <section class='${styles['end-section']}'>
            <div class='${styles['section-item-container']}'>
                <img src='images/bg-3.png' class='${styles['section-bg']}' alt='bg image'>
                <div class='${styles['section-info']}'>
                    <h1 class='${styles.title}'>order <span>now</span></h1>
                    <p class='${styles.info}'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dicta ipsum fuga, magnam numquam, iste ex pariatur error 
                        ad maxime vero, accusamus provident nulla hic quia!
                    </p>
                </div>
            </div>
        </section>

        <footer id='footer'></footer>
    `)

    Home_Function();

  const Head = document.getElementById('header') as HTMLDivElement | null;
    {Head && Header(Head)}

    const Foot = document.getElementById('footer') as HTMLDivElement | null;
    {Foot && Footer(Foot)}
}