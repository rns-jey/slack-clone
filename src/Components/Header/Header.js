import './Header.css';
import { FaSearch } from 'react-icons/fa';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';
import { useHistory } from "react-router-dom";



export default function Header() {
  const user = (localStorage.getItem('uid') ? localStorage.getItem('uid') : '')
  const history = useHistory();

  const logOut = (e) => {
    e.preventDefault();
    localStorage.setItem('at', '');
    localStorage.setItem('client', '');
    localStorage.setItem('expiry', '');
    localStorage.setItem('uid', '');
    console.log(history)
    history.replace("/login");
  }

  return (
    <div className="header-container">

      <HeaderComponents title="mid-header">
        <div>Search</div>
        <FaSearch />
      </HeaderComponents>

      <HeaderComponents title="right-header">
        <FaRegQuestionCircle />
      </HeaderComponents>

      <HeaderComponents title="user-avi">
        <BsPersonFill />
        <div className="user-menu">
          <div className="user-details">
            <div className="user-image">
              <BsPersonFill />
            </div>
            <div className="user-name-status">
              <div className="user-name">{user}</div>
              <div className="user-status">Active</div>
            </div>
          </div>
          <div className="signout-container" onClick={logOut}>
            <span id="sign-out">Sign out</span>
          </div>
        </div>
      </HeaderComponents>
    </div>
  );
}