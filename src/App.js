import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/Theme';
import { Container } from '@material-ui/core';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';

const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Navbar />
    <div className="">
    <Container>
      <Switch>
        <Route path='/' component={Trending} exact />
        <Route path='/movies' component={Movies} />
        <Route path='/series' component={Series} />
        <Route path='/search' component={Search} />
      </Switch>
    </Container>
    </div>
    </ThemeProvider>
    </>
  );
}

export default App;