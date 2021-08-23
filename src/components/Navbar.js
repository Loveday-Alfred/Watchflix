import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button} from '@material-ui/core/';
import useStyles from './NavbarStyles';

export default function ButtonAppBar() {
  const classes = useStyles();
  const [navBackground, setNavBackground] = useState('appBarTransparent')
  const navRef = React.useRef()

  navRef.current = navBackground

  useEffect(() => {
      const handleScroll = () => {
          const show = window.scrollY > 150
          if (show) {
              setNavBackground('appBarSolid')
          } else {
              setNavBackground('appBarTransparent')
          }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
          document.removeEventListener('scroll', handleScroll)
      }
  }, [])

  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="fixed" className={classes[navRef.current]}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Watchflix
          </Typography>
          <Button color="primary">Trending</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}