import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Login from  '../../Pages/Login';
import Register from '../../Pages/Register';
import Test from '../../Pages/Test';


function PageRoute() {
  const user = (localStorage.getItem('uid') ? localStorage.getItem('uid') : '')

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/">
        {
          user.length > 0 ?
          <Redirect to="/home" /> :
          <Redirect to="/login" />
        }
        </Route>
      </Switch>
    </Router>
  );
}

export default PageRoute;