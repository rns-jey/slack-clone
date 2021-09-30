
import './ChatBody.css'
import { Switch, Route, Redirect } from 'react-router-dom';
import ChatMsg from './ChatMsg';

export default function ChatBody() {
  return ( 
    <Switch>
      <Route path="/home">
        <HomePage />
      </Route>
      {arrChannels.map(({ cID, cName }) => (
        <Route path={`/C${cID}`}>
          <ChatMsg title={cName} />
        </Route>
      ))}
      <Redirect from="/" to="/home" />
    </Switch>
  )
}

function HomePage() {
  return (
    <div className="home-page">
      <h1>Slack App</h1>
    </div>
  )
}