
import React from "react";

import styles from './landing.module.less';
import HomeImg from '../../assets/home_img.jpeg';
import DateSelector from "./DatePicker/DateSelector.tsx";
import SelectComponent from "./DropDown/SelectComponent.tsx";

const Landing: React.FC = () => {
    return(
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <div className={styles.image}>
                    {/*<img src={HomeImg} alt="Img"/>*/}
                </div>
                <div className={styles.mask}></div>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>
                        <h1>LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING</h1>
                    </div>
                    <div className={styles.paragraph}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                    </div>
                </div>
            </div>
            <div className={styles.checkoutContainer}>
                <div className={styles.checkoutSection}>
                    <DateSelector placeholder={'Check In'} />
                    <DateSelector placeholder={'Check Out'} />
                    <SelectComponent title={"Adults"}/>
                    <SelectComponent title={"Children"}/>
                    <div className={styles.serchContainer}><i className='bx bx-search'></i></div>
                </div>
            </div>
        </div>
    )
}

export  default Landing;