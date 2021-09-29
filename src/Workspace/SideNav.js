
import './SideNav.css'
import CreateIcon from "@material-ui/icons/Create";
import SideNavOpt from './SideNavOpt';

export default function SideNav() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
          <div className="sidebar_info">
              <h2>Avion School</h2>
          </div>
          <CreateIcon />
      </div>
      <SideNavOpt />
    </div>
  )
}