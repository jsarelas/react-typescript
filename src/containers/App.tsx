import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import ES6 from './ES6';
import Example from './Example';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
       <h1>Learning Club</h1>
       <Router>
       <div className="app-navigation">
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/es6/">ES6</Link>
            </li>
            <li>
              <Link to="/examples/">Examples</Link>
            </li>
          </ul>
        </div>
        <div className="app-container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/es6/" component={ES6} />
            <Route path="/examples/" component={Example} />
          </Switch>
        </div>
        </Router>
      </header>
      
    </div>
  );
}

export default App;
