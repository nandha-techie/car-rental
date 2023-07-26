import {useState} from 'react';
import '../styles/faq/_faq.scss';

const Faq = ()=>{
    const [activeQ, setActiveQ] = useState('q1')

    const openQ = (id)=>{
        setActiveQ(activeQ === id ? '' : id);
    }

    const getClassQuestion = (id)=>{
        return activeQ === id ? 'active-question' : ''; 
    }

    const getClassAnswer = (id)=>{
        return activeQ === id ? 'active-answer' : '';
    }

    return(
        <div className="faq-section">
            <div className="container">
                <div className="faq-content">
                    <div className="faq-content__title">
                        <h5>FAQ</h5>
                        <h2>Frequently Asked Questions</h2>
                        <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
                    </div>
                    <div className="all-questions">
                        <div className="faq-box">
                            <div className={ `faq-box__question ${getClassQuestion('q1')}` } onClick={()=> openQ('q1')}>
                                <p>1. What is special about comparing rental car deals?</p>
                                <i className="fa-solid fa-angle-down"></i>
                            </div>
                            <div className={`faq-box__answer ${getClassAnswer('q1')} `} onClick={()=> openQ('q1')}>
                                Comparing rental car deals is important as it helps find the
                                best deal that fits your budget and requirements, ensuring you
                                get the most value for your money. By comparing various
                                options, you can find deals that offer lower prices,
                                additional services, or better car models. You can find car
                                rental deals by researching online and comparing prices from
                                different rental companies.
                            </div>
                        </div>
                        <div className="faq-box">
                            <div className={ `faq-box__question ${getClassQuestion('q2')}` } onClick={()=> openQ('q2')}>
                                <p>2. How do I find the car rental deals?</p>
                                <i className="fa-solid fa-angle-down"></i>
                            </div>
                            <div className={`faq-box__answer ${getClassAnswer('q2')} `} onClick={()=> openQ('q2')}>
                                Comparing rental car deals is important as it helps find the
                                best deal that fits your budget and requirements, ensuring you
                                get the most value for your money. By comparing various
                                options, you can find deals that offer lower prices,
                                additional services, or better car models. You can find car
                                rental deals by researching online and comparing prices from
                                different rental companies.
                            </div>
                        </div>
                        <div className="faq-box">
                            <div className={ `faq-box__question ${getClassQuestion('q3')}` } onClick={()=> openQ('q3')}>
                                <p>3. How do I find such low rental car prices?</p>
                                <i className="fa-solid fa-angle-down"></i>
                            </div>
                            <div className={`faq-box__answer ${getClassAnswer('q3')} `} onClick={()=> openQ('q3')}>
                                Comparing rental car deals is important as it helps find the
                                best deal that fits your budget and requirements, ensuring you
                                get the most value for your money. By comparing various
                                options, you can find deals that offer lower prices,
                                additional services, or better car models. You can find car
                                rental deals by researching online and comparing prices from
                                different rental companies.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;