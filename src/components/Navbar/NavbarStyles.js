import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: { ...theme.mixins.toolbar, flexGrow: 1 },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Pacifico',
    fontSize: '30px',
    color: '#e50914'
  },
  userName: {
    fontSize: '12px',
    fontFamily: 'Raleway'
  }
}));