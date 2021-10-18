import "./ChatContainer.css"
import { Route, Switch } from "react-router";
import People from '../Peopleanduser/People'
import ChatWrapper from "./ChatWrapper";

export default function ChatContainer({ Recents, RefreshSideNav }) {
  return (
    <Switch>
      <Route path="/people">
        <People />
      </Route>
      <Route exact path="/home">
        <HomePage />
      </Route>
      <Route path={"/:type/:id"}>
        <ChatWrapper
          Recents={Recents}
          RefreshSideNav={RefreshSideNav}
        />
      </Route>
    </Switch>
  )
}

function HomePage() {
  return (
    <div className="home-page">
      <h1>Hi. Welcome to your digital HQ.</h1>
    </div>
  )
}