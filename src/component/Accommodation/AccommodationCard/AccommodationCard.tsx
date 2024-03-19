import React from "react";

import styles from './accommodationCard.module.less';

interface AccommodationProps {
    title: string;
    facilityArray: Array<string>
    backgroundImg: string
}

const AccommodationCard: React.FC<AccommodationProps> = ({title, facilityArray,backgroundImg}) => {
    return(
        <div className={styles.container}>
                <div className={styles.imageContainer} style={{backgroundImage: `url(${backgroundImg})`,backgroundSize: 'cover'}}>

            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>
                <ul>
                    {
                        facilityArray.map(facility => {
                            return <li>{facility}</li>
                        })
                    }
                </ul>
            </div>
            <div className={styles.exploreContainer}>
                <button>Explore</button>
            </div>
        </div>
    )
}

export default AccommodationCard;