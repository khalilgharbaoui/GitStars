import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './components/App';
import Overview from './components/Overview';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Overview} />
    </Route>
  </Router>
), document.getElementById('root'));
