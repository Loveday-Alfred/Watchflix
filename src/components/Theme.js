import { createTheme } from '@material-ui/core/styles';

const resBlac = "#111";
const resGrey = "#f2f4f3";

export default createTheme({
    palette: {
        common: {
            white: `${resGrey}`,
            grey: `${resBlac}`
        },
        primary: {
            main: `${resGrey}`
        },
        secondary: {
            main: `${resBlac}`
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none", 
            fontWeight: 400,
            fontSize: "1rem"
        }
    }
});