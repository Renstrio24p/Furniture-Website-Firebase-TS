import styles from '../../assets/sass/modules/product.module.scss';

export default function ProductFunction() {
    let ratingStarInput = document.querySelectorAll(`.${styles['rating-star']}`) as NodeListOf<HTMLImageElement> | null;

    Array.from(ratingStarInput!).map((star, index) => {
        star.addEventListener('click',()=>{
            for(let i = 0; i < 5; i++){
                if(i <= index){
                    ratingStarInput![i].src = `images/fill star.png`;
                } else {
                    ratingStarInput![i].src = `images/no fill star.png`;
                }
            }
        })
    });
}