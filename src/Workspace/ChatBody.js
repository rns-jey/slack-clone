
import './ChatBody.css'
import { Switch, Route } from 'react-router-dom';
import { arrChannels } from './SideNavOpt';
import TextareaAutosize from 'react-textarea-autosize';

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