import './App.css';
import { FaRegClock } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';
import CreateIcon from "@material-ui/icons/Create";

const HeaderComponents = (props) => {
  return <div className={props.title}>{props.children}</div>
}

function App() {
  return (
    <div className="Main">
      <div className="header-container">
        <HeaderComponents title="left-header">
          <FaRegClock />
        </HeaderComponents>

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
              <div className="user-name">jmarenas@gmail.com</div>
              <div className="user-status">Active</div>
            </div>
          </div>
          <div className="signout-container">
            <span id="sign-out">Sign out</span>
          </div>
        </div>
      </HeaderComponents>
      </div>
      <div className="workspace">
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>Avion School</h2>
                </div>
                <CreateIcon />
            </div>
        </div>
        <div className="chat-container">
          <div className="chat-header"></div>
          <div className="chat-body"></div>
          <div className="chat-box"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
