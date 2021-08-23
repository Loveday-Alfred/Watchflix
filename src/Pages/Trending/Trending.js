import useStyles from './TrendingStyles';
import BannerImage from './photo.jpg';

const Banner = () => {
    const classes = useStyles();
    
    return (
        <>
            <div className={classes.banner}
              style={{
                  backgroundImage: `url(${BannerImage})` 
                  }}>
            </div>
            <div className="banner-fadeBottom"></div>
        </>
    );
}

export default Banner;