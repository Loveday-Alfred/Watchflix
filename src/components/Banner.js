import './Banner.css';
import BannerImage from './photo.jpg';

const Banner = () => {
    return (
        <>
            <header className="banner" 
              style={{
                  backgroundSize: "cover", 
                  backgroundPosition: "center center", 
                  backgroundImage: `url(${BannerImage})` 
                  }}>
            </header>
            <div className="banner-fadeBottom"></div>
        </>
    );
}

export default Banner;