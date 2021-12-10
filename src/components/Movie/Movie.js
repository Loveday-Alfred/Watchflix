import { Badge } from '@material-ui/core';
import { img_300, unavailable } from '../../config/config';
import './Movie.css';
import MovieModal from '../MovieModal/MovieModal';

const Movie = ({ id, poster, title, date, media, ratings }) => {
    return (
          <MovieModal media={media} id={id}>
            <Badge badgeContent={ratings} color={ratings > 6 ? 'primary' : 'secondary' } />
            <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
            <b className="title">{title}</b>
            <span className="movie-details">
              {media === "tv" ? "Series" : "Movie"}
              <span className="movie-details">{date}</span>
            </span>
          </MovieModal>
    )
}

export default Movie
