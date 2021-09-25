import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RedirectToLogin from "../Components/Router/RedirectToLogin";
import Home from  '../Pages/Home';
import Login from  '../Pages/Login';
import CreateUser from "../Pages/CreateUser";

function PageRoute() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={CreateUser} />
        <Route exact path="/home" component={Home} />
        <RedirectToLogin />
      </Switch>
    </Router>
  );
}

export default PageRoute;