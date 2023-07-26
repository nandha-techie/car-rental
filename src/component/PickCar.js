import { useState } from 'react';
import '../styles/PickCar/_pickCar.scss';
import CarBox from './CarBox';
import { CAR_DATA } from './CarData';

const PickCar = ()=>{
    
    const [active, setActive] = useState('SecondCar');
    const [colorBtn, setColorBtn] = useState('btn1');

    const btnId = (id)=>{
        return (colorBtn === id ? 0 : setColorBtn(colorBtn === id ? '' : id));
    }

    const coloringButton = (id)=>{
        return colorBtn === id ? 'colored' : '';
    }

    return(
        <div className="pick-section">
            <div className="container">
                <div className="pick-container">
                    <div className="pick-container__title">
                        <h3>Vehicle Models</h3>
                        <h2>Our rental fleet</h2>
                        <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
                    </div>
                    <div className="pick-container__car-content">
                        <div className="pick-box">
                            <button
                             className={`${coloringButton('btn1')}`}
                             onClick={()=>{ btnId('btn1');
                                setActive('FirstCar');
                            }}
                             id="btn1">Audi A1 S-Line</button>
                            <button
                             className={`${coloringButton('btn2')}`}
                             onClick={()=>{ btnId('btn2')
                                setActive('SecondCar');
                            }}
                             id="btn2">VW Golf 6</button>
                            <button
                             className={`${coloringButton('btn3')}`}
                             onClick={()=>{ btnId('btn2')
                                setActive('ThirdCar');
                            }}
                             id="btn3">Toyota Camry</button>
                            <button
                             className={`${coloringButton('btn4')}`}
                             onClick={()=> { btnId('btn4');
                                setActive('FourthCar');
                            }}
                             id="btn4">BMW 320 ModernLine</button>
                            <button
                             className={`${coloringButton('btn5')}`}
                             onClick={()=> { btnId('btn5');
                                setActive('FifthCar');
                             }}
                             id="btn5">Mercedes-Benz GLK</button>
                            <button
                             className={`${coloringButton('btn6')}`}
                             onClick={()=> {btnId('btn6'); 
                             setActive('SixthCar');
                            }}
                             id="btn6">VW Passat CC</button>
                        </div> 
                        { active === 'FirstCar' && <CarBox data={CAR_DATA} carID={0} /> }
                        { active === 'SecondCar' && <CarBox data={CAR_DATA} carID={1} /> }
                        { active === 'ThirdCar' && <CarBox data={CAR_DATA} carID={2} /> }
                        { active === 'FourthCar' && <CarBox data={CAR_DATA} carID={3} /> }
                        { active === 'FifthCar' && <CarBox data={CAR_DATA} carID={4} /> }
                        { active === 'SixthCar' && <CarBox data={CAR_DATA} carID={5} /> }                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PickCar;