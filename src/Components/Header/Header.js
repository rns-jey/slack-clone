import './Header.css';
import { FaRegClock } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaRegQuestionCircle } from 'react-icons/fa';

function Header() {
  return (
    <div className="header-container">
      <div className="left-header">
        <FaRegClock />
      </div>
      <div className="mid-header">
        <input placeholder="Search"></input>
        <FaSearch />
      </div>
      <div className="right-header">
        <FaRegQuestionCircle />
      </div>
    </div>
  );
}

export default Header;