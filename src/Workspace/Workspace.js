import './Workspace.css'
import SideNav from './SideNav';
import ChatBody from './ChatBody';

export default function Workspace() {
  return (
    <div className="workspace">
      <SideNav />
      <ChatBody />
    </div>
  )
}