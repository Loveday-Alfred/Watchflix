import axios from "axios"
import { useEffect, useState } from "react";
import Genres from "../../components/Genres/Genres";
import Movie from '../../components/Movie/Movie';
import CustomPagination from '../../components/Pagination/CustomPagination';
import useGenre from "../../hooks/useGenre";

const Series = () => {
  const [series, setSeries] = useState([])
  const [page, setPage] = useState(1);
  const [numOfPage, setNumOfPage] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres)

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );

    setSeries(data.results);
    setNumOfPage(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page, genreforURL]);

    return (
        <div>
          <span className="header-title">Series</span>
          <Genres
            type="tv"
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            genres={genres}
            setGenres={setGenres}
            setPage={setPage}
          />
          <div className="trending">
          {series && series.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                poster={movie.poster_path}
                title={movie.title || movie.name}
                date={movie.first_air_date || movie.release_date}
                media="tv"
                ratings={movie.vote_average}
              />
          ))};
        </div>
        {numOfPage > 1 && (
        <CustomPagination setPage={setPage} numOfPage={numOfPage} />
        )}
        </div>
    )
}

export default Series

