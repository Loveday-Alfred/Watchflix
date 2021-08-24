import { Container } from "@material-ui/core";
import { img_300 } from '../../config/config';

const Movie = ({ id, poster, title, media, ratings, overview }) => {
    return (
        <Container>
          <div><img src={`${img_300}/${poster}`} alt="Poster" /></div>
        </Container>
    )
}

export default Movie
