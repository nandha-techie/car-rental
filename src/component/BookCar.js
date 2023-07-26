import '../styles/bookCar/_bookCar.scss';

const BookCar = ()=>{
    return(
        <section className="book-section">
            <div className="container">
                <div className="book-content">
                    <div className="book-content__box">
                        <h2>Book a car</h2>
                        <form className="box-form">
                            <div className="box-form__car-type">
                                <label><i className="fa-solid fa-car"></i> &nbsp; Select Your Car Type <b>*</b></label>
                                <select>
                                    <option>Select your car type</option>
                                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                                    <option value="VW Golf 6">VW Golf 6</option>
                                    <option value="Toyota Camry">Toyota Camry</option>
                                    <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                                    <option value="VW Passat CC">VW Passat CC</option>
                                </select>
                            </div>
                            <div className="box-form__car-type">
                                <label><i className="fa-solid fa-location-dot"></i>  &nbsp;  Pick-up <b>*</b></label>
                                <select>
                                    <option>Select pick up location</option>
                                    <option>Belgrade</option>
                                    <option>Novi Sad</option>
                                    <option>Nis</option>
                                    <option>Kragujevac</option>
                                    <option>Subotica</option>
                                </select>
                            </div>
                            <div className="box-form__car-type">
                                <label><i className="fa-solid fa-location-dot"></i>  &nbsp; Drop-of <b>*</b></label>
                                <select>
                                    <option>Select pick up location</option>
                                    <option>Belgrade</option>
                                    <option>Novi Sad</option>
                                    <option>Nis</option>
                                    <option>Kragujevac</option>
                                    <option>Subotica</option>
                                </select>
                            </div>
                            <div className="box-form__car-time">
                                <label htmlFor ="picktime"><i className="fa-regular fa-calendar-days"></i>  &nbsp;  Pick-up <b>*</b></label>
                                <input type="date" id="droptime" />
                            </div>
                            <div className="box-form__car-time">
                                <label htmlFor ="picktime"><i className="fa-regular fa-calendar-days"></i>  &nbsp;  Drop-of <b>*</b></label>
                                <input type="date" id="droptime" />
                            </div>
                            <button className="btn-search">Search</button>
                        </form>
                    </div>    
                </div>
            </div>
        </section>
    )
}

export default BookCar;