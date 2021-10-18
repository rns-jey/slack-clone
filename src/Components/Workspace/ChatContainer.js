import './ChatContainer.css'
import { Route, Switch } from 'react-router';
import People from '../Peopleanduser/People'
import ChatWrapper from './ChatWrapper';
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

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
        <ChatWrapper />
      </Route>
    </Switch>
  )
}

function HomePage() {
  
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../assets/lottie.json')
    })
  }, [])
  return (
    <div className="home-page">
      <h1>Hi. Welcome to your digital HQ.</h1>
      <span className="lottie" ref={container}></span>
    </div>
  )
}