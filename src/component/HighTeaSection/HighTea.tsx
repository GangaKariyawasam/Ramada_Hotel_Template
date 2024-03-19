import React from "react";

import styles from './highTea.module.less';

const HighTea: React.FC = () => {
    return(
        <div className={styles.container}>
            <div className={styles.imageSection}></div>
            <div className={styles.detailSection}>
                <h1>High Tea</h1>
                <h2>The Ramada Colombo’s high tea buffe</h2>
                <p>The ambience at the Ramada lobby is no less than what you’d expect from a real classy high tea. You can listen to classical instrumentals of your favorite songs from live violin and piano music. The guests were in awe at how this instrumental duo filled the whole atmosphere with their tunes, while they indulged in buffet delicacies.</p>
                <div className={styles.learnMoreContainer}>
                    <p>Explore Ramada High Tea<i className='bx bx-right-arrow-alt'></i></p>
                </div>
            </div>
        </div>
    )
}

export default HighTea;