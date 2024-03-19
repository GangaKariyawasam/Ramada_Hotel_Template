import React from "react";
import styles from "./footer.module.less"
import RamadaHeaderLogo from "../../assets/ramada_header_logo.svg";
import TcWinnerLogo from "../../assets/tc_winner_logo.svg";
import WyGreenLogo from "../../assets/wy_green_img.svg";
import WyLogo from "../../assets/wy_img.svg";
 const Footer: React.FC = () => {
    return (
        <div className={styles.container}>
           <div className={styles.content}>
               <div className={styles.logoSection}>
                   <img src={RamadaHeaderLogo} alt="Logo" />
               </div>
               <div className={styles.searchSection}>
                   <div className={styles.searchWrapper}>
                       <input type="text" placeholder={"Enter Your Email Here"}/>
                       <button>Get In Touch</button>
                   </div>
               </div>
               <div className={styles.detailSection}>
                   <div className={styles.aboutSection}>
                       <p>RAMADA BY WYNDHAM COLOMBO</p>
                       <p>Owned and managed by Alhambra HotelsLtd, under license from Ramada Worldwide</p>
                       <p>30, Sir Mohamed Macan Markar Mawatha,Colombo 03, Sri Lanka</p>
                       <p>T: +94 11-242 2001 <br/>
                           F&B Hotline : +94 76 6645507 <br/>
                           F: +94 11-244 7977 <br/>
                           info@ramadacolombo.com</p>
                   </div>
                   <div className={styles.resourceSection}>
                       <div className={styles.linksContainer}>
                           <p>QUICK LINKS</p>
                           <ul>
                               <li><a href="/Home">Home</a></li>
                               <li><a href="/Spa">Spa</a></li>
                               <li><a href="/Overview">Overview</a></li>
                               <li><a href="/Banquets">Banquets</a></li>
                               <li><a href="/Accommodation">Accommodation</a></li>
                               <li><a href="/Facilities">Facilities</a></li>
                               <li><a href="/Attractions">Attractions</a></li>
                               <li><a href="/Wine & Dine">Wine & Dine</a></li>
                               <li><a href="/Promotions">Promotions</a></li>
                               <li><a href="/Booking">Booking</a></li>
                           </ul>
                       </div>
                       <div className={styles.resourceContainer}>
                           <p>RESOURCES</p>
                           <ul>
                               <li>Lorem Ipsum</li>
                               <li>is simply dummy</li>
                               <li>text of the</li>
                               <li>printing and typesetting </li>
                               <li>industry</li>
                               <li>Lorem Ipsum has</li>
                               <li>been the industry's</li>
                           </ul>
                       </div>
                   </div>
                   <div className={styles.imageSection}>
                       <div className={styles.imageContainer1}>
                           <div className={styles.firstImg}>
                               <img src={TcWinnerLogo} alt="Img"/>
                           </div>
                           <div className={styles.secondImg}>
                               <img src={WyGreenLogo} alt="Img"/>
                           </div>
                       </div>
                       <div className={styles.imageContainer2}>
                           <img src={WyLogo} alt=""/>
                       </div>
                   </div>
               </div>
               <div className={styles.contactSection}>
                   <div className={styles.contactContainer}>
                       <a href=""><i className='bx bxl-facebook'></i></a>
                       <a href=""><i className='bx bxl-instagram'></i></a>
                       <a href=""><i className='bx bxl-twitter'></i></a>
                   </div>

               </div>
               <div className={styles.supportSection}>
                   <div className={styles.supportContainer}>
                       <a href="">Support</a>
                       <a href="">Privacy policy</a>
                       <a href="">Terms and Conditions</a>
                   </div>
               </div>
               <div className={styles.divider}><div></div></div>
               <div className={styles.footerSection}>
                   <p>© 2023 Code Desk , All Right Receved</p>
               </div>
           </div>
        </div>
    );
};

export default Footer;