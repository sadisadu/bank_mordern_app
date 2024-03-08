import styles from "./style";
import { Business, CardDeal, CTA, Navbar, Testimonials, Hero  } from "./components";
import Billing from "./components/Billing";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Stats from "./components/Stats";

const App = () => (
  <div className="bg-primary w-screen overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials/>
        <Clients />
        <CTA />
        <Footer /> 
      </div>
    </div>
  </div>
);

export default App;