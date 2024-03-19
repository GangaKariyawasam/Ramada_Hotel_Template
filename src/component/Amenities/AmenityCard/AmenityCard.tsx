import React from "react";

import styles from './amenityCard.module.less';
import AmenityImg from '../../../assets/amenity_img1.svg';
interface AmenityCardProps {
    title: string;
}
const AmenityCard: React.FC<AmenityCardProps> = ({title}) => {
    return(
        <div className={styles.container}>
            <div className={styles.iconSection}>
                <img src={AmenityImg} alt="Img"/>
            </div>
            <div className={styles.titleSection}>
                <div>{title}</div>
            </div>
        </div>
    )
}

export default AmenityCard;