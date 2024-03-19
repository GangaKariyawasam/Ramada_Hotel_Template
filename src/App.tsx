import styles from './App.module.css'
import {Header} from "./component/Header/Header.tsx";
import Landing from "./component/Landing/Landing.tsx";
import AboutUs from "./component/AboutUs/AboutUs.tsx";
import Accommodation from "./component/Accommodation/Accommodation.tsx";
import Facilities from "./component/Facilities/Facilities.tsx";
import Offers from "./component/Offers/Offers.tsx";
import Amenities from "./component/Amenities/Amenities.tsx";
import Banqueting from "./component/Banqueting/Banqueting.tsx";
import HighTea from "./component/HighTeaSection/HighTea.tsx";
import Delivery from "./component/DeliverySection/Delivery.tsx";
import Footer from "./component/Footer/Footer.tsx";

function App() {

  return (
    <>
       <div className={styles.container}>
           <Header/>
           <Landing />
           <AboutUs />
           <Accommodation />
           <Facilities />
           <Offers />
           <Amenities />
           <Banqueting />
           <HighTea />
           <Delivery />
       </div>
        <Footer />
    </>
  )
}

export default App
