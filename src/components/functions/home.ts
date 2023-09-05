import { styles } from "../styles"


export default function Home_Function(){
    
    const navbar = document.querySelector(`.${styles.navbar}`) as HTMLDivElement | null;
    window.addEventListener('scroll',()=>{
        if(scrollY >= 270){
            navbar?.classList.add(styles.bg);
        } else {
            navbar?.classList.remove(styles.bg);
        }
    })
    
    const CollageImages = Array.from(document.querySelectorAll(`.${styles['collage-img']}`)) as HTMLDivElement[];

    CollageImages.forEach((item, i) => {
        const originalZIndex = item.style.zIndex;
    
        item.addEventListener('mouseover', () => {
            CollageImages.forEach((image, index) => {
                if (index !== i) {
                    image.style.filter = 'blur(10px)';
                    image.style.zIndex = '1';
                }
            });
    
            item.style.zIndex = '2';
            item.style.filter = '';
        });
    
        item.addEventListener('mouseleave', () => {
            CollageImages.forEach((image) => {
                image.style.filter = '';
                image.style.zIndex = originalZIndex;
            });
        });
    });
    

}
