import './SideNav.css'
import CreateIcon from "@material-ui/icons/Create";

export default function SideNav(props) {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
          <div className="sidebar_info">
              <h2>Avion School</h2>
          </div>
          <CreateIcon />
      </div>
      {props.children}
    </div>
  )
}