import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';
import Movie from '../../components/Movie/Movie';
import Banner from '../../components/Banner/Banner';
import './Trending.css';
import CustomPagination from '../../components/Pagination/CustomPagination';

const Trending = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        );
        setMovies(data.results);
    };

    useEffect(() => {
        window.scroll(0, 0);
       fetchTrending();
       // eslint-disable-next-line
    }, [page])

    return (
        <>
        <Banner />
        <Container>
           <span className="header-title">
            trending
           </span>
        <div className="trending">
          {movies && movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                poster={movie.poster_path}
                title={movie.title || movie.name}
                date={movie.first_air_date || movie.release_date}
                media={movie.media_type}
                ratings={movie.vote_average}
              />
          ))};
        </div>
        <CustomPagination setPage={setPage} />
        </Container>
        </>
    )
}

export default Trending;
  