import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: '#111',
        border: '1px solid #282c34',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 1, 3),
        width: '90%',
        height: '80%',
        borderRadius: 10,
        color: 'white',
      },
}));