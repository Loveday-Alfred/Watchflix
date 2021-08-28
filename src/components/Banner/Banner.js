import { useEffect, useState } from 'react';
import axios from 'axios';
import './Banner.css';

const Banner = () => {
    const [movies, setMovies] = useState([]);

    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
        );
        setMovies(data.results[Math.floor(Math.random() * data.results.length -1 )]);
    };

    useEffect(() => {
    fetchTrending();
    }, [])

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <>
        <header className="banner" style={{ 
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`
        }}>
        <div className="banner_contents">
                    <h1 className="banner_title">{movies?.title || movies?.name || movies?.original_name}</h1>
                    <div className="banner_buttons">
                        <button className="banner_button">Watch Trailer</button>
                    </div>
                    <h1 className="banner_description">
                    {truncate(movies?.overview, 100)}
                    </h1>
                </div>
                <div className="banner-fadeBottom"></div>
        </header>
        </>
    )
}

export default Banner
