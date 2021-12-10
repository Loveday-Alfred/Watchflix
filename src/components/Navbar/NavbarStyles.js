import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: { 
    ...theme.mixins.toolbar, 
    flexGrow: 1 
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Pacifico',
    fontSize: '30px',
    color: '#e50914',
    [theme.breakpoints.down("sm")]: {
      fontSize: '18px',
      } 
  },
  userName: {
    fontSize: '12px',
    fontFamily: 'Raleway',
    [theme.breakpoints.down("sm")]: {
      fontSize: '8px',
      } 
  }
}));