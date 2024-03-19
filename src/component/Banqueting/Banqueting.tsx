import React from "react";

import styles from './banqueting.module.less';
import BanquetingCard from "./BanquetingCard/BanquetingCard.tsx";
import BanquetingImg1 from '../../assets/banqueting_img1.jpeg';
import BanquetingImg2 from '../../assets/banqueting_img2.jpeg';
import BanquetingImg3 from '../../assets/banqueting_img3.jpeg';

const Banqueting: React.FC = () => {
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Banqueting</h1>
                <h2>Ramada Offers Some Of The Choicest Banquet Hall</h2>
                <p>Ramada Colombo Offers Some Of The Choicest Banquet Halls In Colombo For Your Special Occasion, Business Meeting Or Intimate Gathering.</p>
            </div>
            <div className={styles.cardSection}>
                <div className={styles.cardContainer}>
                    <BanquetingCard
                        backgroundImg={BanquetingImg1}
                        title={'The Liberty Ballroom'}
                        description={'An idyllic setting for any grand wedding celebration or special occasion. Liberty Ball Room offers a spacious and lavish ambience to ensure a truly memorable occasion.'}
                    />
                </div>
                <div className={styles.cardContainer}>
                    <BanquetingCard
                        backgroundImg={BanquetingImg2}
                        title={'The Liberty Ballroom'}
                        description={'A spacious meeting room with an aquarium style view of the streets of Colombo.'}
                    />
                </div>
                <div className={styles.cardContainer}>
                    <BanquetingCard
                        backgroundImg={BanquetingImg3}
                        title={'The Liberty Ballroom'}
                        description={'A private meeting space equipped with state of the art technology.'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Banqueting;