import React from "react";

import styles from './accommodation.module.less';
import AccommodationCard from "./AccommodationCard/AccommodationCard.tsx";
import AccomodationImg1 from '../../assets/accomodation_img1.jpeg';
import AccomodationImg2 from '../../assets/accomodation_img2.jpeg';
import AccomodationImg3 from '../../assets/accomodation_img3.jpeg';
import AccomodationImg4 from '../../assets/accomodation_img4.jpeg';

const Accommodation: React.FC = () => {
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Accommodation</h1>
                <h2>Comfortable Rooms Just For You</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.cardContainer}>
                    <AccommodationCard
                        title={'Twin Bedded Deluxe Room'}
                        facilityArray={['Lorem Ipsum','Typesetting industry.','Lorem Ipsum has been','The industry\'s standard']}
                        backgroundImg={AccomodationImg1}
                    />
                </div>
                <div className={styles.cardContainer}>
                    <AccommodationCard
                        title={'King Bed Deluxe Room'}
                        facilityArray={['Lorem Ipsum','Typesetting industry.','Lorem Ipsum has been','The industry\'s standard']}
                        backgroundImg={AccomodationImg2}
                    />
                </div>
                <div className={styles.cardContainer}>
                    <AccommodationCard
                        title={'Splendor Suite'}
                        facilityArray={['Lorem Ipsum','Typesetting industry.','Lorem Ipsum has been','The industry\'s standard']}
                        backgroundImg={AccomodationImg3}
                    />
                </div>
                <div className={styles.cardContainer}>
                    <AccommodationCard
                        title={'Premier Suite'}
                        facilityArray={['Lorem Ipsum','Typesetting industry.','Lorem Ipsum has been','The industry\'s standard']}
                        backgroundImg={AccomodationImg4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Accommodation;