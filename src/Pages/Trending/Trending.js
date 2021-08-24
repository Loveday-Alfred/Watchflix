import { useEffect, useState } from 'react';
import './Trending.css';
import axios from 'axios';
import Movie from '../../components/Movie/Movie';
import { Container } from '@material-ui/core';
import Banner from '../../components/Banner/Banner';

const Trending = () => {
    const [movies, setMovies] = useState([]);

    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
        );
        setMovies(data.results);
    };

    useEffect(() => {
    fetchTrending();
    }, [])

    return (
        <>
        <Banner />
        <Container>
           <span className="pageTitle">Trending</span>
        </Container>
        <div className="trending">
          {movies && movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                poster={movie.poster_path}
                title={movie.title || movie.release_date}
                media={movie.media_type}
                ratings={movie.vote_average}
                overview={movie.overview}
              />
          ))};
        </div>
        </>
    )
}

export default Trending;
  