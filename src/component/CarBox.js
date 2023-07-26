import { useState } from 'react';

const CarBox = ({data, carID})=>{
    const [carLoad, setCarLoad] = useState(true);

    return(
        <>
            {data[carID].map((car, id)=>(
                <div className="box-cars" key={id}>
                    <div className="pick-car">
                        { carLoad && <span className='loading'></span> }
                        <img src={car.img} alt="pick car" 
                            onLoad={()=> setCarLoad(false)}
                        />
                    </div>
                    <div className="pick-description">
                        <div className="pick-description__price">
                            <span>${car.price}</span>/ rent per day
                        </div>
                        <div className="pick-description__table">
                            <div className="pick-description__table__col">
                                <span>Model</span>
                                <span>{car.model}</span>
                            </div>
                            <div className="pick-description__table__col">
                                <span>Mark</span>
                                <span>{car.mark}</span>
                            </div>
                            <div className="pick-description__table__col">
                                <span>Year</span>
                                <span>{car.year}</span>
                            </div>
                            <div className="pick-description__table__col">
                                <span>Doors</span>
                                <span>{car.doors}</span>
                            </div>
                            <div className="pick-description__table__col">
                                <span>AC</span>
                                <span>{car.air}</span>
                            </div>
                            <div className="pick-description__table__col">
                                <span>Transmission</span>
                                <span>{car.transmission}</span>
                            </div>
                            <div className="pick-description__table__col">
                                <span>Fuel</span>
                                <span>{car.fuel}</span>
                            </div>
                        </div>
                        <a className="cta-btn" href="#booking-section"> Reserve Now</a>
                    </div>
                </div>
            )) }
        
        </>
    )
}

export default CarBox;