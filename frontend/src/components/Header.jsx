import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { ReactComponent as Logo } from '../assets/logo.svg';
import mainLogo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';

function Header() {
  return (
    <header className='header'>
      <DropDown />
      <div className='logo'>
        <Link to='/'>
          {/* <h1>
            <Logo id='logo' />
          </h1> */}
          <img src={mainLogo} alt='' style={{ width: '15rem' }} />
        </Link>
      </div>
      <ul>
        <li>
          <Link to='/login'>
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link to='/register'>
            <FaUser /> Register
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
