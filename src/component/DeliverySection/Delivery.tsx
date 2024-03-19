import React from "react";

import styles from './delivery.module.less';

const Delivery: React.FC = () => {
    return(
        <div className={styles.container}>
            <div className={styles.detailSection}>
                <h1>Delivery & Takeaway service</h1>
                <h2>Giving your hunger a safer, faster and better alternative</h2>
                <p>users can pay directly through our website with Visa or MasterCard or opt for cash or card payment on delivery! Our website is extremely user friendly and offers a stress-free ordering experience with the option to schedule a delivery on a particular date or time</p>
                <h4>Delivery times are between 10 am to 10 pm.</h4>
                <h5>For more information contact us on</h5>
                <a href="tel:+(+94) 112 422 001 (399)">(+94) 112 422 001 (399)</a> <br/>
                <a href="tel:+(+94) 777 864 864">(+94) 777 864 864</a>
                <div className={styles.learnMoreContainer}>
                    <p>Order Now<i className='bx bx-right-arrow-alt'></i></p>
                </div>
            </div>
            <div className={styles.imageSection}>
            </div>
        </div>
    )
}

export default Delivery;