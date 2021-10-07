import { Switch, Route, Redirect } from 'react-router-dom';
import ChatMsg from './ChatMsg';
import People from '../Components/Peopleanduser/People';

export default function ChatBody( { Channels, Recents }) {
  return ( 
    <Switch>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/people">
        <People />
      </Route>
      {Channels.map(({ id, name }) => (
        <Route key={id} path={`/C${id}`}>
          <ChatMsg type="Channel" title={name} convoID={id} />
        </Route>
      ))}
      {Recents.map(({ id, uid }) => (
        <Route key={id} exact path={`/D${id}`}>
          <ChatMsg type="User" title={uid} convoID={id} />
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