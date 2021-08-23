import { AppBar, Toolbar, Typography} from '@material-ui/core/';
import useStyles from './NavbarStyles';
import Navigation from '../Tabs/Navigation';

export default function ButtonAppBar() {
  const classes = useStyles();
  // const [navBackground, setNavBackground] = useState('appBarTransparent')
  // const navRef = React.useRef()

  // navRef.current = navBackground

  // useEffect(() => {
  //     const handleScroll = () => {
  //         const show = window.scrollY > 150
  //         if (show) {
  //             setNavBackground('appBarSolid')
  //         } else {
  //             setNavBackground('appBarTransparent')
  //         }
  //     }
  //     document.addEventListener('scroll', handleScroll)
  //     return () => {
  //         document.removeEventListener('scroll', handleScroll)
  //     }
  // }, [])
  // className={classes[navRef.current]}

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBarSolid} elevation={0} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Watchflix
          </Typography>
          <Navigation />
        </Toolbar>
      </AppBar>
    </div>
  );
}