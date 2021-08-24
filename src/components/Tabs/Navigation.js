import Avatar from '@material-ui/core/Avatar';
import Photos from '../../Pages/Trending/pizza.jpeg';
import useStyles from './NavigationStyles';

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.small} alt="LogIn" src={Photos} />
    </div>
  );
}
