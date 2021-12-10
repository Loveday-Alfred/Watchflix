import { AppBar, Toolbar, Typography} from '@material-ui/core';
import useStyles from './NavbarStyles';
import ImageAvaters from '../Tabs/Navigation';

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.toolbar}>
      <AppBar position="fixed" style={{backgroundColor: '#111'}}>
        <Toolbar>
          <Typography onClick={() => window.scroll(0, 0)} variant="h6" className={classes.title}>
            Watchflix
          </Typography>
          <ImageAvaters />
          <h1 className={classes.userName}>Loveday</h1>
        </Toolbar>
      </AppBar>
    </div>
  );
}
