import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    tabContainer: {
        marginLeft: "auto"  //pushes all the tabs to the right
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 1, //it squeezes all the tabs bar removing extra spaces
        marginLeft: "15px"   //gives the tabs little spaces btw them
    },
    button: {
        marginLeft: "10px",
        marginRight: "10px",
        height: "40px",
        "&:hover": {
            backgroundColor: 'transparent'
        }
    },
    active: {
        textDecoration: 'underline solid red',
        textUnderlineOffset: '0.5em',
        textDecorationThickness: '0.2em'
    }
}));