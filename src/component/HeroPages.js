import '../styles/HeroPages/_heroPages.scss';

const HeroPages = (props)=>{
    const {name} = props;
    return(
        <div className="hero-pages">
            <div className="hero-pages__overlay"></div>
            <div className="container">
                <div className="hero-pages__text">
                    <h2>{name}</h2>
                    <p>Home / {name}</p>
                </div>
            </div>
        </div>
    )
    
}

export default HeroPages;