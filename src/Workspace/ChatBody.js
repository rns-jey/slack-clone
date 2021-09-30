
import './ChatBody.css'
import { Switch, Route, Redirect } from 'react-router-dom';
import { arrChannels } from './SideNavOpt';
import TextareaAutosize from 'react-textarea-autosize';

export default function ChatBody() {
  return ( 
    <Switch>
      <Route path="/home">
        <HomePage />
      </Route>
      {arrChannels.map(({ cID, cName }) => (
        <Route path={`/C${cID}`}>
          <Page title={cName} />
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

function Page({ title }) {
  return (
    <div className="chat-container">
      <div className="chat-header">{title}</div>
      <div className="chat-body">
        <div class="inner">Bottom</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Hi</div>
        <div class="inner">Top</div>
      </div>
      <div className="chat-box-container">
        <div className="chat-box">
          <TextareaAutosize />
        </div>
      </div>
    </div>
  )
}