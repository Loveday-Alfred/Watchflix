import Avatar from '@material-ui/core/Avatar';
import useStyles from './NavigationStyles';
import Fred from './fred.png';

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.small} alt="LogIn" src={Fred} />
    </div>
  );
}
