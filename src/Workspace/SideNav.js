
import './SideNav.css'
import CreateIcon from "@material-ui/icons/Create";
import { useLocation, Link } from 'react-router-dom';

function NavLink({ to, activeClassName, inactiveClassName, className, ...rest }) {
  let location = useLocation();
  let isActive = location.pathname === to;
  let allClassNames = (isActive ? `${className} ${activeClassName}` : ` ${className}`)

  return <Link className={allClassNames} to={to} {...rest} />;
}

export default function SideNav() {
  return (
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
  )
}