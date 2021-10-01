import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Home from './Components/Home/Home';
import NewMovie from './Components/NewMovie/NewMovie';
import PopularMovie from './Components/PopularMovie/PopularMovie';
import { Footer } from 'react-bulma-components';
import MoviesDetails from './Components/MoviesDetails/MoviesDetails'

function App() {
  return (
    <Router>
      <div className="Container mt-5">
      <div className="btn-group">
        <Link to="/" className="btn btn-dark"> 
          Home
        </Link>
        <Link to="/newMovies" className="btn btn-dark"> 
          NewMovies
        </Link>
        <NavLink to="/popularMovies" className="btn btn-dark" activeClassName="active"> 
          PopularMovies
        </NavLink>
      </div>
      
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/newMovies" exact={true}>
            <NewMovie />
          </Route>
          <Route path="/popularMovie" exact={true}>
            <PopularMovie />
          </Route>
          <Route path="/movie/:id" exact={true}>
            <MoviesDetails />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


