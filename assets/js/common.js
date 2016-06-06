import React from 'react';
import ReactDOM from 'react-dom';
import Index from './container/index';
import Page1 from './container/page1';
import Page2 from './container/page2';
import Page3 from './container/page3';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import STYLE from '../css/style.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/template' component={Index} />
    <Route path='/template/page1' component={Page1} />
    <Route path='/template/page2' component={Page2} />
    <Route path='/template/page3' component={Page3} />
  </Router>
  ),document.getElementById('app')
)
