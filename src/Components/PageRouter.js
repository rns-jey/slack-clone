import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from  '../Pages/Home';
import Login from  '../Pages/Login';
import Mock from '../Pages/Mock';

function PageRoute() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/mock" component={Mock} />
      </Switch>
    </Router>
  );
}

export default PageRoute;