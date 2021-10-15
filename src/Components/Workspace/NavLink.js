import { useLocation, Link } from 'react-router-dom';

export default function NavLink({ type, to, activeClassName, inactiveClassName, className, ...rest }) {
  let location = useLocation();
  let isActive = location.pathname === to;
  let allClassNames = (isActive ? `${className} ${activeClassName}` : ` ${className}`)

  return (<Link className={allClassNames} to={`/${type}/${to}`} {...rest} />);
}