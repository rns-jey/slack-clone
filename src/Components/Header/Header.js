import './Header.css';
import { FaRegClock } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';

function Header() {
  return (
    <div className="header-container">
      <div className="left-header">
        <FaRegClock />
      </div>
      <div className="mid-header">
        <div>Search</div>
        <FaSearch />
      </div>
      <div className="right-header">
        <FaRegQuestionCircle />
      </div>
      <div className="user-avi">
        <BsPersonFill />
      </div>
    </div>
  );
}

export default Header;