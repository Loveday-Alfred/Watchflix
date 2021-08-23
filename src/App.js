// import Banner from './components/Banner';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/Theme';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
    <div className="App">
        <Navbar />
    </div>
    </ThemeProvider>
    </>
  );
}

export default App;