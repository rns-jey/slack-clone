import './Header.css';
import { FaRegClock } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';

const HeaderComponents = (props) => {
  return <div className={props.title}>{props.children}</div>
}

export default function Header() {
  const user = (localStorage.getItem('uid') ? localStorage.getItem('uid') : '')
  const history = useHistory();
  const [searchState, toggleSearch] = useState(false)

  const signOut = (e) => {
    e.preventDefault();
    localStorage.setItem('at', '');
    localStorage.setItem('client', '');
    localStorage.setItem('expiry', '');
    localStorage.setItem('uid', '');
    history.push("/login");
  }

  return (
    <div className="header-container">
      <HeaderComponents title="left-header">
        <FaRegClock />
      </HeaderComponents>

      <HeaderComponents title="mid-header" state={toggleSearch}>
        <div>Search</div>
        <FaSearch />
      </HeaderComponents>
      {
        searchState
      }

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
          <div className="signout-container" onClick={signOut}>
            <span id="sign-out">Sign out</span>
          </div>
        </div>
      </HeaderComponents>
    </div>
  );
}