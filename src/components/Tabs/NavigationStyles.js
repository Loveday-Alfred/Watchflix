import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
        width: theme.spacing(2.8),
        height: theme.spacing(2.8),
        }
    },
  }));