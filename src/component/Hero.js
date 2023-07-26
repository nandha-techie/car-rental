import {Link} from 'react-router-dom';
import bgShape from "../images/hero/hero-bg.png";
import displayCar from '../images/hero/main-car.png';
import '../styles/heroStyle/_hero.scss';

const Hero = ()=>{
    return(
        <section id="home" className="hero-section">
            <div className="container">
                <img src={bgShape} className='bg-shape' alt="bg-shape"/>
                <div className="hero-content">
                    <div className="hero-content__text">
                        <h4>Plan your trip now</h4>
                        <h1>Save <span> big </span> with our car rental</h1>
                        <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
                        <div className="hero-content__text__btns">
                            <Link to='' className='hero-content__text__btns__book-ride'>
                                Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                            </Link>
                            <Link to='' className='hero-content__text__btns__learn-more'>
                                Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                            </Link>
                        </div>
                    </div>
                    <img src={displayCar} alt="display car" />
                </div>
            </div>
        </section>
    )
}

export default Hero;