import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './ErrorPage.css';


const ErrorPage = () => {
  return (
    <div className="noquotes">
      <p>No Movies Here</p>
      <Button
        variant="contained"
        color="secondary"
        Link={Link}
        component={Link}
        to="/"
      >
        Home
      </Button>
    </div>
  );
};

export default ErrorPage;