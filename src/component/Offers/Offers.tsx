import React from "react";
import OfferImg1 from '../../assets/offer_img1.jpeg';
import OfferImg2 from '../../assets/offer_img2.jpeg';

import styles from './offers.module.less';
import OfferCard from "./OfferCard/OfferCard.tsx";

const Offers: React.FC = () => {
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Offers</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.cardWrapper}>
                    <OfferCard percentage={"15%"} backgroundImg={OfferImg1}/>
                </div>
                <div className={styles.cardWrapper}>
                    <OfferCard percentage={"20%"} backgroundImg={OfferImg2} />
                </div>
            </div>
        </div>
    )
}

export default Offers;