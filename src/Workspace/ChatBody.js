
import './ChatBody.css'
import { Switch, Route } from 'react-router-dom';
import { arrChannels } from './SideNavOpt';

export default function ChatBody() {
  return ( 
    <Switch>
      {arrChannels.map(({ cID, cName }) => (
        <Route path={`/C${cID}`}>
          <Page title={cName} />
        </Route>
      ))}
    </Switch>
  )
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