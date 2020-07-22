import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import UseState from './pages/UseState';
import ArtList from './pages/UseEffect';
import CustomHook from './pages/CustomHook';
import UseReducer from './pages/UseReducer';
import UseCallback from './pages/UseCallback';

export default function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/useState">useState</Link>
            </li>
            <li>
              <Link to="/useEffect">useEffect</Link>
            </li>
            <li>
              <Link to="/customHook">Custom Hook</Link>
            </li>
            <li>
              <Link to="/useReducer">useReducer</Link>
            </li>
            <li>
              <Link to="/useCallback">useCallback</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/useState">
            <UseState />
          </Route>
          <Route path="/useEffect">
            <ArtList />
          </Route>
          <Route path="/customHook">
            <CustomHook />
          </Route>
          <Route path="/useReducer">
            <UseReducer />
          </Route>
          <Route path="/useCallback">
            <UseCallback />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
