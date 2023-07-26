import PlanTrip from '../component/PlanTrip';
import Banner from '../component/Banner';
import Footer from '../component/Footer';
import HeroPages from '../component/HeroPages';
import '../styles/about/_about.scss';
import AboutImg from '../images/about/about-main.jpg';
import Icon1 from '../images/about/icon1.png';
import Icon2 from '../images/about/icon2.png';
import Icon3 from '../images/about/icon3.png';

const About = ()=>{
    return(
        <>
            <div className="about-section">
                <HeroPages name='About' />
                <div className="container">
                    <div className="about-main">
                        <img src={AboutImg} className="about-main__img" alt="about main" />
                        <div className="about-main__text">
                            <h3>About Company</h3>
                            <h2>You start the engine and your adventure begins</h2>
                            <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
                            <div className="about-main__text__icons">
                                <div className="about-main__text__icons__box">
                                    <img src={Icon1} alt="car type" />
                                    <span>
                                        <h4>20</h4>
                                        <p>Car Types</p>
                                    </span>
                                </div>
                                <div className="about-main__text__icons__box">
                                    <img src={Icon2} alt="rental outlets" />
                                    <span>
                                        <h4>85</h4>
                                        <p>Rental Outlets</p>
                                    </span>
                                </div>
                                <div className="about-main__text__icons__box">
                                    <img src={Icon3} className="last-fk" alt="Repair shop" />
                                    <span>
                                        <h4>75</h4> 
                                        <p>Repair Shop</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PlanTrip />
            <Banner />
            <Footer />
        </>
    )
}

export default About;