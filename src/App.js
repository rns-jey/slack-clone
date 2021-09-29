import './App.css';
import React from "react";
import Header from './Components/Header/Header';
import CreateIcon from "@material-ui/icons/Create";
import { Link, useLocation, Switch, Route, Redirect } from 'react-router-dom';

function NavLink({ to, activeClassName, inactiveClassName, className, ...rest }) {
  let location = useLocation();
  let isActive = location.pathname === to;
  let allClassNames = (isActive ? `${className} ${activeClassName}` : ` ${className}`)

  return <Link className={allClassNames} to={to} {...rest} />;
}

function App() {
  return (
    <div className="Main">
      <Header />
      <div className="workspace">
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>Avion School</h2>
                </div>
                <CreateIcon />
            </div>
            <div className="sidebar_options">
                <NavLink activeClassName="sidebarOptionActive" inactiveClassName="sidebarOptionInActive" className="sidebarOption" to="/channel1">
                  Channel1
                </NavLink>
                <NavLink activeClassName="sidebarOptionActive" inactiveClassName="sidebarOptionInActive" className="sidebarOption" to="/channel2">
                  Channel2
                </NavLink>
                <NavLink activeClassName="sidebarOptionActive" inactiveClassName="sidebarOptionInActive" className="sidebarOption" to="/channel3">
                  Channel3
                </NavLink>
            </div>
        </div>

        <Switch>
          <Route path="/channel1">
            <Page title="Channel1" />
          </Route>
          <Route path="/channel2">
            <Page title="Channel2" />
          </Route>
          <Route path="/channel3">
            <Page title="Channel3" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

function Page({ title }) {
  return (
    <div className="chat-container">
      <div className="chat-header">{title}</div>
      <div className="chat-body"></div>
      <div className="chat-box"></div>
    </div>
  )
}

export default App;
