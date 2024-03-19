import React from "react";
import styles from "././offerCard.module.less";

interface OfferProps{
    backgroundImg: string
    percentage: string
}

const OfferCard: React.FC<OfferProps> = ({backgroundImg,percentage}) =>{
        return(
            <div className={styles.container}>
                <div className={styles.image} style={{backgroundImage: `url(${backgroundImg})`,backgroundSize: 'cover'}}></div>
                <div className={styles.mask}></div>
                <div className={styles.description}>
                    <div className={styles.offer}>
                        <p>{percentage} Off Now</p>
                    </div>
                    <div className={styles.refference}>
                        <p>Get Now <i className='bx bx-right-arrow-alt'></i></p>
                    </div>
                </div>
            </div>
        )
}

export default OfferCard;