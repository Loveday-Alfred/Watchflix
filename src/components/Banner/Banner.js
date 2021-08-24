import { useEffect, useState } from 'react';
import axios from 'axios';

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
    return (
        <div>
        <div className="home" style={{ 
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")` 
        }}>
        </div>
        </div>
    )
}

export default Banner
