import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from  '../Pages/Home';
import Login from  '../Pages/Login';
import Mock from '../Pages/Mock';
import Register from '../Pages/Register';

function PageRoute() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/mock" component={Mock} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default PageRoute;