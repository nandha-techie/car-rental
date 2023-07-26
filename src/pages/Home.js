import BookCar from '../component/BookCar';
import Hero from '../component/Hero';
import PlanTrip from '../component/PlanTrip';
import PickCar from '../component/PickCar';
import Banner from '../component/Banner';
import ChooseUs from '../component/ChosseUs';
import Testimonials from '../component/Testimonials';
import Faq from '../component/Faq';
import Download from '../component/Download';
import Footer from '../component/Footer';

const Home = ()=>{
    return(
        <>
            <Hero />
            <BookCar />
            <PlanTrip />
            <PickCar />
            <Banner />
            <ChooseUs />
            <Testimonials />
            <Faq />
            <Download />
            <Footer /> 
        </>
    )
}

export default Home;