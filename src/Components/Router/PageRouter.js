import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RedirectToLogin from "./RedirectToLogin";
import Home from  '../../Pages/Home';
import Login from  '../../Pages/Login';
import Register from '../../Pages/Register';


function PageRoute() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <RedirectToLogin />
      </Switch>
    </Router>
  );
}

export default PageRoute;