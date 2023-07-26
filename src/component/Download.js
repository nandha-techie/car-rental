import GooglePlay from '../images/download/appstore.svg';
import AppleStore from '../images/download/googleapp.svg';

import '../styles/download/_download.scss';

const Download = ()=>{

    return(
        <div className="download-section">
            <div className="container">
                <div className="download-text">
                    <h2>Download our app to get most out of it</h2>
                    <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
                    <div className="download-text__btns">
                        <img src={GooglePlay}  alt="download button"/>
                        <img src={AppleStore}  alt="download button"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download;
