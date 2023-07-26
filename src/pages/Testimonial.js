import Banner from '../component/Banner';
import Footer from '../component/Footer';
import Testimonials from '../component/Testimonials';
import HeroPages from '../component/HeroPages';

const Testimonial = ()=>{
    return(
        <>
            <div className='testimonial-section'>
                <HeroPages name="Testimonial" />
                <Testimonials />
                <Banner />
                <Footer />
            </div>
        </>
    )
}

export default Testimonial;