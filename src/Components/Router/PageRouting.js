import { Redirect } from "react-router"

export default function RenderComponent(props) {
  const user = (localStorage.getItem('uid') ? localStorage.getItem('uid') : '')

  return (
    <div className={props.className}>
      {user.length > 0 ? props.children : <Redirect to="/login" />}
    </div>
  )
}