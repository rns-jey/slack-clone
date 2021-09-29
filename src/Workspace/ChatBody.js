
import { Switch, Route } from 'react-router-dom';

export default function ChatBody() {
  return ( 
    <Switch>
      <Route path="/channel1">
        <Page title="Channel1" />
      </Route>
      <Route path="/channel2">
        <Page title="Channel2" />
      </Route>
      <Route path="/channel3">
        <Page title="Channel3" />
      </Route>
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