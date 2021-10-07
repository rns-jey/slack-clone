import { useLocation, Link } from 'react-router-dom';

function NavLink({ type, to, activeClassName, inactiveClassName, className, ...rest }) {
  let location = useLocation();
  let isActive = location.pathname === to;
  let allClassNames = (isActive ? `${className} ${activeClassName}` : ` ${className}`)

  return (type === "Channel" ? <Link className={allClassNames} to={`/C${to}`} {...rest} /> : <Link className={allClassNames} to={`/D${to}`} {...rest} />);
}

export default function SideNavOpt( { Channels, Recents }) {
  return (
    <div className="sidebar_options">
      {Channels.map(({ id, name }) => (
        <NavLink key={id} type="Channel" activeClassName="sidebarOptionActive" inactiveClassName="sidebarOptionInActive" className="sidebarOption" to={id}>
          {name}
        </NavLink>
      ))}

      {Recents.map(({ id, uid }) => (
        <NavLink key={id} type="DM" activeClassName="sidebarOptionActive" inactiveClassName="sidebarOptionInActive" className="sidebarOption" to={id}>
          {uid}
        </NavLink>
      ))}
    </div>
  )
}