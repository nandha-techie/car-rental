import Banner from '../component/Banner';
import Footer from '../component/Footer';
import HeroPages from '../component/HeroPages';
import Person1 from "../images/team/1.png";
import Person2 from "../images/team/2.png";
import Person3 from "../images/team/3.png";
import Person4 from "../images/team/4.png";
import Person5 from "../images/team/5.png";
import Person6 from "../images/team/6.png";
import '../styles/team/_team.scss';

const Team = ()=>{
    const teamPersons = [
        { img: Person1, name: "Luke Miller", job: "Salesman" },
        { img: Person2, name: "Michael Diaz", job: "Business Owner" },
        { img: Person3, name: "Briana Ross", job: "Photographer" },
        { img: Person4, name: "Lauren Rivera", job: "Car Detailist" },
        { img: Person5, name: "Martin Rizz", job: "Mechanic" },
        { img: Person6, name: "Caitlyn Hunt", job: "Menager" },
    ]
    return(
        <>
            <div className="team-section">
                <HeroPages name="Our Team" />
                <div className="container">
                    <div className="team-container">
                        {teamPersons.map((details, index)=>(
                            <div className="team-container__box" key={index}>
                                <div className="team-container__box__img">
                                    <img src={details.img} alt="" />
                                </div>
                                <div className="team-container__box__desc">
                                    <h4>{details.name}</h4>
                                    <p>{details.job}</p>
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

export default Team;