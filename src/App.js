import React from "react";
import './App.css';
import Cocktail from'./Cocktail.js';
import Food from './Food.js';
import Home from './Home.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FoodLogo from '@material-ui/icons/Fastfood';
import IconButton from '@material-ui/core/IconButton';


function App() {
  
   return (
    <Router>
      <div className="headerNav">
        <IconButton className="headerNavButton">
                <FoodLogo fontSize="large" className="header_icon"/>
            </IconButton>
            
      </div>
      <div class="outer">
        <nav>
          <ul class="ulitems">
            <li>
              <Link to="/" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>Home</Link>
            </li>
            <li>
              <Link to="/food" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>Food</Link>
            </li>
            <li>
              <Link to="/cocktails" style={{ textDecoration: 'none', color: 'black', fontSize: '30px' }}>Cocktails</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/food">
            <Food />
          </Route>
          <Route path="/cocktails">
            <Cocktail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
