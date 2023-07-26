import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../images/logo/logo.png';
import '../styles/navbar/_navbar.scss';

const Navbar = ()=>{
    const [nav, setNav] = useState(false);

    const openNav = ()=>{
        setNav(!nav);
    }
    
    return(
        <>
            <nav className={`mobile-navbar ${ nav ? "open-nav" : ""}`}>
                <div onClick={openNav} className='mobile-navbar__close'>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <ul className='mobile-navbar__links'>
                    <li>
                        <Link onClick={openNav} to="/">Home</Link>
                    </li>
                    <li>
                        <Link onClick={openNav} to="/about">About</Link>
                    </li>
                    <li>
                        <Link onClick={openNav} to="/vehicle">Vehicle Models</Link>
                    </li>
                    <li>
                        <Link onClick={openNav} to="/testimonial">Testimonials</Link>
                    </li>
                    <li>
                        <Link onClick={openNav} to="/team">Out Team</Link>
                    </li>
                    <li>
                        <Link onClick={openNav} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <div className="navbar">
                    <div className="navbar__img">
                        <Link to="/"  ><img src={ Logo } alt="logo img" /></Link>
                    </div>
                    <ul className='navbar__links'>
                        <li>
                            <Link className="home-link" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="about-link" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="vehicle-link" to="/vehicle">Vehicle Models</Link>
                        </li>
                        <li>
                            <Link className="testimonial-link" to="/testimonial">Testimonials</Link>
                        </li>
                        <li>
                            <Link className="team-link" to="/team">Our Team</Link>
                        </li>
                        <li>
                            <Link className="contact-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className='navbar__buttons'>
                        <Link className='navbar__buttons__sign-in' to="/">Sign In</Link>
                        <Link className='navbar__buttons__register' to="/">Register</Link>
                    </div>
                    <div className="mobile-hamb" onClick={openNav}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;