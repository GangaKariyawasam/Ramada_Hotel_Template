import React from "react";

import styles from './facilityCard.module.less';

interface FacilityCardProps {
    backgroundImg: string;
    title: string;
    description: string;
}
const FacilityCard: React.FC<FacilityCardProps> = ({backgroundImg,title, description}) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageSection}>
                <img src={backgroundImg} alt="Img"/>
            </div>
            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
            </div>
        </div>
    )
}

export default FacilityCard;