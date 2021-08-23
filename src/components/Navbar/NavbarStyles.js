import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: 'red',
      fontFamily: "Pacifico",
      fontSize: '30px',
      textTransform: 'capitalize'
    },
    appBarTransparent: {
        backgroundColor: 'transparent',
        transitionTimingFunction: 'ease-in',
        transition: 'all 0.5s'
    },
    appBarSolid: {
        backgroundColor: '#111'
    }
  }));