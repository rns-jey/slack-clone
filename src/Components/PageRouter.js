import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from  '../Pages/Home';
import Login from  '../Pages/Login';
import CreateUser from "../Pages/CreateUser";

function PageRoute() {
  const [ isLogged, setLogin ] = useState(false);

  useEffect(() => {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const user = rememberMe ? localStorage.getItem('user') : '';

    setLogin(prevLog => (user.length > 0 ? true : false))
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={CreateUser} />
        <Route exact path="/">
          {isLogged ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default PageRoute;