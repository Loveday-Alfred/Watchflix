import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/Theme";
import { Container } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import BottomNav from "./components/BottomNav/BottomNav";
// import ErrorPage from './ErrorPage/ErrorPage';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <div className="app">
          <Switch>
            <>
              <Route path="/" exact>
                <Trending />
              </Route>
              <Container>
                <Route path="/movies">
                  <Movies />
                </Route>
                <Route path="/series">
                  <Series />
                </Route>
                <Route path="/search">
                  <Search />
                </Route>
                {/* <Route path='*'><ErrorPage /></Route> */}
              </Container>
            </>
          </Switch>
        </div>
        <BottomNav />
      </ThemeProvider>
    </>
  );
};

export default App;
