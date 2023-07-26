import '../styles/footer/_footer.scss';

const Footer = ()=>{
    return(
        <div className="footer-section">
            <div className="container">
                <div className="footer-content">
                    <ul className="footer-content__1">
                        <li>CAR <span>Rental</span></li>
                        <li>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</li>
                        <li><a href="#tel" ><i className="fa-solid fa-phone"></i>&nbsp; (123) -456-789</a></li>
                        <li><a href="#email"><i className="fa-solid fa-envelope"></i>&nbsp; carrental@gmail.com</a></li>
                        <li><a href="#design" style={{fontSize: '14px'}}> Design by XpeedStudio</a></li>
                    </ul>
                    <ul className="footer-content__2">
                        <li>COMPANY</li>
                        <li><a href="#york">New York</a></li>
                        <li><a href="#careers">Careers</a></li>
                        <li><a href="#mobile">Mobile</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#work">How we work</a></li>
                    </ul>
                    <ul className="footer-content__2">
                        <li>WORKING HOURS</li>
                        <li>Mon - Fri: 9:00AM - 9:00PM</li>
                        <li>Sat: 9:00AM - 19:00PM</li>
                        <li>Sun: Closed</li>
                    </ul>
                    <ul className="footer-content__2">
                        <li>SUBSCRIPTION</li>
                        <li>Subscribe your Email address for latest news & updates.</li>
                        <li>
                            <input type="text" className="footer-content__2__subscribe" placeholder="Enter Email Address" />
                        </li>
                        <li>
                            <button type="button" className="footer-content__2__submit-email">Submit</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;