import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Generator from './components/Generator';
import Timelapse from './components/Timelapse';

export default function App(props) { 
  return (
    <Router>
      <div>
        <Route exact path="/" component={Generator} />
        <Route exact path="/timelapse/:location/:day" component={Timelapse} />
      </div>
    </Router>
  );
}