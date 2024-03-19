import React from "react";
import AboutImg1 from '../../assets/about_img1.jpeg';
import AboutImg2 from '../../assets/about_img2.jpeg';

import styles from './aboutUs.module.less';

const AboutUs: React.FC = () => {
    return(
        <div className={styles.container}>
            <div className={styles.detailSection}>
                <h1>About Us</h1>
                <h2>Explore More About Us</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                <div className={styles.learnMoreContainer}>
                <p>Learn More <i className='bx bx-right-arrow-alt'></i></p>
                </div>
            </div>
            <div className={styles.imageSection}>
                <div className={styles.firstImageContainer}>
                    <div className={styles.firstImage}>
                    </div>
                </div>
                <div className={styles.secondImageContainer}>
                    <div className={styles.secondImage}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;