import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    banner: {
      width: '100%',
      height: '40em',
      [theme.breakpoints.down("md")]: {
        height: "30em"
    },
    [theme.breakpoints.down("xs")]: {
        height: "23em"
    } 
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(2)
    },
    popu: {
      textDecoration: 'underline solid #e6d3a3',
      textUnderlineOffset: '0.4em',
      textDecorationThickness: '0.1em',
      textAlign: 'center',
      paddingBottom: '1em'
    },
    popular: {
      fontFamily: "Pacifico",
      fontSize: '35px',
      color: '#e6d3a3'
    },
}));