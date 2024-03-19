import React from "react";

import styles from './facilities.module.less';
import FacilityCard from "./FacilityCard/FacilityCard.tsx";
import FacilityImg1 from "../../assets/facility_img1.svg";
import FacilityImg2 from "../../assets/facility_img2.svg";
import FacilityImg3 from "../../assets/facility_img3.svg";
import FacilityImg4 from "../../assets/facility_img4.svg";

const Facilities: React.FC = () => {
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Facilities</h1>
                <h2>Enjoy completed and best quality facilities</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.facilityCard}>
                    <FacilityCard
                        backgroundImg={FacilityImg1}
                        title={'- Gym'}
                        description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy '}
                    />
                </div>
                <div className={styles.facilityCard}>
                    <FacilityCard
                        backgroundImg={FacilityImg2}
                        title={'- Ayu Balinese Spa'}
                        description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy '}
                    />
                </div>
                <div className={styles.facilityCard}>
                    <FacilityCard
                        backgroundImg={FacilityImg3}
                        title={'-  Sauna'}
                        description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy '}
                    />
                </div>
                <div className={styles.facilityCard}>
                    <FacilityCard
                        backgroundImg={FacilityImg4}
                        title={'- Swimming Pool'}
                        description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy '}
                    />
                </div>
            </div>
        </div>
    )
}

export default Facilities;