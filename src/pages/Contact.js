import Banner from '../component/Banner';
import Footer from '../component/Footer';
import HeroPages from '../component/HeroPages';
import '../styles/contact/_contact.scss';

const Contact = ()=>{
    return(
        <>
            <div className="contact-section">
                <HeroPages name="Contact" />
                <div className="container">
                    <div className="contact-container">
                        <div className='contact-container__text'>
                            <h2>Need additional information?</h2>
                            <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
                            <a href="#phone"><i className="fa-solid fa-phone"></i>  (123) 456-7869</a>
                            <a href="#email"><i className="fa-solid fa-envelope"></i>  carrental@carmail.com</a>
                            <a href="#location"><i className="fa-solid fa-location-dot"></i>  Belgrade, Serbia</a>
                        </div>
                        <div className='contact-container__form'>
                            <form>
                                <label>Full Name <span>*</span></label>
                                <input type="text" placeholder='Eg. "Joe Sham"' />
                                <label>Email <span>*</span></label>
                                <input type="text" placeholder='youremail@example' />
                                <label>Tell us about it <span>*</span></label>
                                <textarea type="text" placeholder='Write here' />
                                <button><i className="fa-solid fa-envelope-open-text"></i> Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>    
                <Banner />
                <Footer />
            </div>
        </>
    )
}

export default Contact;
