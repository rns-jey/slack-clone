import { useLocation, Link } from 'react-router-dom';

export const arrChannels = [
  {
    cID: 1,
    cName: "Channel Wan"
  },
  {
    cID: 2,
    cName: "Channel Tu"
  },
  {
    cID: 3,
    cName: "Channel Tri"
  },
]

function NavLink({ to, activeClassName, inactiveClassName, className, ...rest }) {
  let location = useLocation();
  let isActive = location.pathname === to;
  let allClassNames = (isActive ? `${className} ${activeClassName}` : ` ${className}`)

  return <Link className={allClassNames} to={`/C${to}`} {...rest} />;
}

export default function SideNaveOpt() {
  return (
    <div className="sidebar_options">
      {arrChannels.map(({ cID, cName }) => (
        <NavLink activeClassName="sidebarOptionActive" inactiveClassName="sidebarOptionInActive" className="sidebarOption" to={cID}>
          {cName}
        </NavLink>
      ))}
    </div>
  )
}