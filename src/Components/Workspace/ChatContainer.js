import { Route, Switch } from "react-router";
import People from '../Peopleanduser/People'

export default function ChatContainer() {
  return (
    
    <Switch>
      <Route path="/people">
        <People />
      </Route>
      <Route exact path="/home">
        <HomePage />
      </Route>
      <Route path={"/:type/:id"}>
        
      </Route>
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