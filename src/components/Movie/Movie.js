import { Badge } from '@material-ui/core';
import { img_300, unavailable } from '../../config/config';
import './Movie.css';

const Movie = ({ id, poster, title, date, media, ratings }) => {
    return (
          <div className="media">
            <Badge badgeContent={ratings} color={ratings > 6 ? 'primary' : 'secondary' } />
            <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
            <b className="title">{title}</b>
            <span className="movie-details">
              {media === "tv" ? "Series" : "Movie"}
              <span className="movie-details">{date}</span>
            </span>
          </div>
    )
}

export default Movie
