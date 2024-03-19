import React from "react";
import RamadaHeaderLogo from '../../assets/ramada_header_logo.svg';

import styles from "./header.module.less";
export const Header:React.FC = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.headerImg}>
                    <img src={RamadaHeaderLogo} alt="Logo" />
                </div>

                <div className={styles.navContainer}>
                    <nav className={styles.nav}>
                        <ul>
                            <li><a href="/Accommodation">Accommodation</a></li>
                            <li><a href="/Restaurants">Restaurants</a></li>
                            <li><a href="/Banquets">Banquets</a></li>
                            <li><a href="/Amenities">Amenities</a></li>
                            <li><a href="/Delivery">Delivery</a></li>
                            <li><a href="/Explore Us">Explore Us</a></li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.buttonContainer}>
                    <button className={styles.contactButton}>Contact</button>
                </div>

            </header>
        </>
    );
};