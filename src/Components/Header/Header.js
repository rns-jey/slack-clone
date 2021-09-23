import './Header.css';
import { FaRegClock } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';

const HeaderComponents = (props) => {
  return <div className={props.title}>{props.children}</div>
}

const Header = () => {
  return (
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
        </HeaderComponents>
    </div>
  );
}

export default Header;