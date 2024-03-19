import React from "react";

import styles from './amenities.module.less';
import AmenityCard from "./AmenityCard/AmenityCard.tsx";

const Amenities: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.amenitySection}>
                <div className={styles.titleSection}>
                    <h1>Wine & Dine</h1>
                    <h2>Ramada Colombo Restaurants</h2>
                </div>
                <div className={styles.cardSection}>
                    <div className={styles.cardContainer}><AmenityCard title={'The Gardenia Coffee Shop'} /></div>
                    <div className={styles.cardContainer}><AmenityCard title={'Alhambra'} /></div>
                    <div className={styles.cardContainer}><AmenityCard title={'Oasis Lounge'} /></div>
                    <div className={styles.cardContainer}><AmenityCard title={'The Secret Garden'} /></div>
                    <div className={styles.cardContainer}><AmenityCard title={'Baked'} /></div>
                </div>
            </div>
            <div className={styles.learnMoreSection}>
                <div className={styles.image}>
                    <div className={styles.imageWrapper}></div>
                </div>
                <div className={styles.detail}>
                    <h1>The Gardenia Coffee Shop </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                    <div className={styles.learnMoreContainer}>
                        <p>Learn More <i className='bx bx-right-arrow-alt'></i></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Amenities;