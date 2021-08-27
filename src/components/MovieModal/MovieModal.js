import { useState, useEffect } from 'react';
import axios from "axios";
import './MovieModal.css';
import useStyles from './MovieModalStyles';
import { Modal, Backdrop, Fade, Button } from '@material-ui/core';
import { img_500, unavailable, unavailableLandscape, } from "../../config/config";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Carousel from "../Carousel/Carousel";

export default function MovieModal({ children, media, id }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setContent(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, []);


  return (
    <div>
      <button type="button" className="media" onClick={handleOpen}>
        { children }
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
      <Fade in={open}>
      {content && (
        <div className={classes.paper}>
          <div className="ContentModal">
            <img
              src={
                content.poster_path
                  ? `${img_500}/${content.poster_path}`
                  : unavailable
              }
              alt={content.name || content.title}
              className="ContentModal__portrait"
            />
            <img
              src={
                content.backdrop_path
                  ? `${img_500}/${content.backdrop_path}`
                  : unavailableLandscape
              }
              alt={content.name || content.title}
              className="ContentModal__landscape"
            />
            <div className="ContentModal__about">
              <span className="ContentModal__title">
                {content.name || content.title} (
                {(
                  content.first_air_date ||
                  content.release_date ||
                  "-----"
                ).substring(0, 4)}
                )
              </span>
              {content.tagline && (
                <i className="tagline">{content.tagline}</i>
              )}

              <span className="ContentModal__description">
                {content.overview}
              </span>

              <div>
                <Carousel id={id} media_type={media} />
              </div>

              <Button
                variant="contained"
                startIcon={<YouTubeIcon />}
                color="secondary"
                target="__blank"
                href={`https://www.youtube.com/watch?v=${video}`}
              >
                Watch the Trailer
              </Button>
            </div>
          </div>
        </div>
      )}
    </Fade>
      </Modal>
    </div>
  );
}
