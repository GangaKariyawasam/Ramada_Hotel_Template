import React from "react";

import styles from './banquetingCard.module.less';

interface BanquetingCardProps {
    backgroundImg: string
    title: string;
    description: string;
}
const BanquetingCard: React.FC<BanquetingCardProps> = ({backgroundImg,title, description}) => {
    return(
        <div className={styles.container}>
            <div className={styles.imageSection} style={{backgroundImage: `url(${backgroundImg})`,backgroundSize: 'cover'}}>
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.learnMore}>Learn More <i className='bx bx-right-arrow-alt'></i></div>
        </div>
    )
}

export default BanquetingCard;