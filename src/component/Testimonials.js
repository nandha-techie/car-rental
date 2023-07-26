import Img1 from '../images/testimonials/pfp1.jpg';
import Img2  from '../images/testimonials/pfp2.jpg';
import '../styles/testimonial/_testimonial.scss';

const Testimonials = ()=>{
    return(
        <div className="testimonials-section">
            <div className="container">
                <div className="testimonials-content">
                    <div className="testimonials-content__title">
                        <h4>Reviewed by People</h4>
                        <h2>Client's Testimonials</h2>
                        <p>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
                    </div>
                    <div className="all-testimonials">
                        <div className="all-testimonials__box" >
                            <span className='quotes-icon'><i className="fa-solid fa-quote-right"></i></span>
                            <p className="description">"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."</p>
                            <div className='all-testimonials__box__name'>
                                <div className="all-testimonials__box__name__profile">
                                    <img src={Img1} alt="profile display" />
                                    <span>
                                        <h3>Parry Hotter</h3>
                                        <p>Belgrade</p>
                                    </span>
                                </div>
                            </div>    
                        </div>
                        <div className="all-testimonials__box box-2">
                            <span className='quotes-icon'><i className="fa-solid fa-quote-right"></i></span>
                            <p className="description">"The car was in great condition and made our trip even better. Highly recommend for this car rental website!.  thank you "</p>
                            <div className='all-testimonials__box__name'>
                                <div className="all-testimonials__box__name__profile">
                                    <img src={Img2} alt="profile display" />
                                    <span>
                                        <h3>Ron Rizzly</h3>
                                        <p>Novi Sad</p>
                                    </span>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;