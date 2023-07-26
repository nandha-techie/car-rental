import Banner from '../component/Banner';
import Footer from '../component/Footer';
import HeroPages from '../component/HeroPages';
import Audi from '../images/cars-big/audi-box.png';
import Mercedes from '../images/cars-big/benz-box.png';
import Bmw from '../images/cars-big/bmw-box.png';
import Golf6 from '../images/cars-big/golf6-box.png';
import Passat from '../images/cars-big/passat-box.png';
import Toyota from '../images/cars-big/toyota-box.png';
import '../styles/vehicle/_vehicle.scss';

const Vehicle = ()=>{

    const carData = [
        {name: 'Audi A1', price: 45, img: Audi},
        {name: 'Golf6', price: 36, img: Golf6},
        {name: 'Toyota', price: 30, img: Toyota},
        {name: 'Bmw', price: 35, img: Bmw},
        {name: 'Mercedes', price: 50, img: Mercedes},
        {name: 'VW Passat', price: 25, img: Passat},
    ];
    
    return(
        <>
            <div className="vehicle-section">
                <HeroPages name="Vehicle" />
                <div className="container">
                    <div className="cards">
                        { carData.map((car, index) => (
                            <div className="cards__box" key={index}>
                                <div className="cards__box__details">
                                    <img src={car.img} alt="vehicle pictures" />
                                    <div className="cards__box__details__desc">
                                        <div className="cards__box__details__desc__name-price">
                                            <div>
                                                <p>{car.name}</p>
                                                <span>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h4>${car.price}</h4>
                                                <p>per day</p>
                                            </div>
                                        </div>
                                        <div className="cards__box__details__desc__type">
                                            <span><i className="fa-solid fa-car-side"></i> &nbsp; Audi</span>
                                            <span>4/5 &nbsp; <i className="fa-solid fa-car-side"></i></span>
                                            <span><i className="fa-solid fa-car-side"></i> &nbsp; Manual</span>
                                            <span>Diesel &nbsp; <i className="fa-solid fa-car-side"></i></span>
                                        </div>
                                        <hr />
                                        <a href="/" className="cards__box__details__desc__btn" >Book Ride</a>
                                    </div>
                                </div>
                            </div>
                        ))}    
                    </div>
                </div>
                <Banner />
                <Footer />
            </div>
        </>
    )
}

export default Vehicle;