import styles from '../../assets/sass/modules/product.module.scss';
import Footer from '../Footer';
import ProductFunction from '../functions/product';
import '../../assets/sass/global/product.scss';

export default function ProductPage(DOM: HTMLDivElement){

    document.title = 'Online Store - Products'

    DOM.innerHTML = (`

        <section class='${styles['product-section']}'>
            <img src='images/product-image.png' class='${styles['product-image']}' alt='product image'>
            <div class='${styles['product-detail']}'>
                <h1 class='${styles['product-title']}'>Premium Sofa</h1>
                <p class='${styles['product-des']}'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Numquam vitae amet doloribus aspernatur recusandae fuga!
                </p>
                <div class='${styles.ratings}'>
                    <img src='images/fill star.png' class='${styles.star}' alt='star'>
                    <img src='images/fill star.png' class='${styles.star}' alt='star'>
                    <img src='images/fill star.png' class='${styles.star}' alt='star'>
                    <img src='images/fill star.png' class='${styles.star}' alt='star'>
                    <img src='images/no fill star.png' class='${styles.star}' alt='star'>
                    <span class='${styles['rating-count']}'>4,823 reviews</span>
                </div>
                <p class='${styles.price}'>$ 599</p>
                <div class='${styles['btn-container']}'>
                    <button class='${styles['product-btn']} ${styles['buy-btn']}'>buy now</button>
                    <button class='${styles['product-btn']} ${styles['cart-btn']}'>add to cart</button>
                </div>
            </div>
        </section>

        <section class='${styles['detail-des']}'>
            <h1 class='${styles['section-title']}'>details</h1>
            <p class='${styles.des}'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Morbi rhoncus augue sapien, et sollicitudin ipsum euismod eget.
            Nam aliquam tristique dictum. Integer placerat a turpis ut eleifend.
            Aliquam viverra ligula ac vehicula imperdiet. Vivamus venenatis quam mi,
            elementum rutrum mauris ultricies ultricies. Fusce eget elit molestie ante
            vehicula tincidunt at ut eros. Donec ullamcorper quis sapien nec pellentesque.
            Ut vitae dui erat. Nunc eu ligula eget diam tincidunt posuere. Ut ut finibus elit.
            Duis commodo nisl quam, sed commodo ante lobortis nec. Sed accumsan consequat
            massa, rhoncus euismod urna molestie et. Donec non vulputate risus.<br><br> Quisque
            accumsan pharetra tincidunt. Ut sollicitudin nibh placerat magna blandit eleifend.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit,
            dui eu interdum cursus, orci quam egestas mauris, ut imperdiet ex dolor in dui. 
            Mauris ut augue elementum, pretium neque eget, venenatis justo. Suspendisse potenti. 
            Suspendisse aliquam vulputate neque, sit amet lacinia urna bibendum at. Ut suscipit, 
            nulla sed semper feugiat, nibh est lacinia quam, ut egestas nunc magna quis arcu. 
            Cras orci elit, varius sed nisl sed, imperdiet sagittis ante.<br><br>         
            Nulla non ultrices arcu, et laoreet enim. In hac habitasse platea dictumst. 
            Pellentesque id feugiat justo. Aliquam ut rhoncus nunc. Sed et lacus magna. 
            Suspendisse maximus eros eu enim dapibus, in mattis leo suscipit. 
            Sed lacinia ipsum fermentum rutrum mattis. Nulla a dapibus augue. 
            Suspendisse accumsan, turpis vitae porta rutrum, mi ex posuere mi, 
            id scelerisque tellus arcu non lacus. Curabitur luctus purus at scelerisque interdum. 
            Aliquam varius vehicula libero.           
            Vestibulum vitae tincidunt quam, id ultrices augue. Fusce vel quam scelerisque,
            aliquam ex ac, ullamcorper eros. Morbi congue odio eu tincidunt feugiat.
            Proin id ipsum velit. Vivamus pretium magna ornare egestas efficitur. 
            In hendrerit id orci ut convallis. Duis elit nisl, pulvinar sit amet vulputate at,
            gravida eu nisl. Donec bibendum lacus ac augue aliquet, rhoncus mollis lacus finibus.           
            Suspendisse pulvinar eget ante id varius. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Cras ultricies elementum leo,
            et consectetur nisi lobortis in. Cras quis arcu fringilla, hendrerit erat vitae,
            sollicitudin nisl. Suspendisse hendrerit urna sed sodales feugiat.
            Cras semper sollicitudin nisi. 
            </p>
        </section>

        <section class='${styles['review-section']}'>
            <h1 class='${styles['section-title']}'>Reviews </h1>
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

        <section class='${styles['add-review-section']}'>
            <h1 class='${styles['section-title']}'>add a review</h1>
            <form id='send' class='${styles.form}'>
                <input type='text' class='${styles['review-headline']}' placeholder='review headline'/>
                <textarea class='${styles['review-field']}' placeholder='review'></textarea>
                <p class='${styles['rating-text']}'>how much you like this product?</p>
                <div class='${styles['star-container']}'>
                    <img src='images/no fill star.png' class='${styles['rating-star']}' alt='star'>
                    <img src='images/no fill star.png' class='${styles['rating-star']}' alt='star'>
                    <img src='images/no fill star.png' class='${styles['rating-star']}' alt='star'>
                    <img src='images/no fill star.png' class='${styles['rating-star']}' alt='star'>
                    <img src='images/no fill star.png' class='${styles['rating-star']}' alt='star'>
                </div>
                <button class='${styles['add-review-btn']}'>add review</button>
            </form>
        </section>

        <section class='${styles['best-selling-products-section']}'>
            <h1 class='${styles['section-title']}'>Similar Products</h1>
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

        <footer id='footer'></footer>
    `)

    const Foot = document.getElementById('footer') as HTMLDivElement | null;
    Footer(Foot!)

    ProductFunction();
}