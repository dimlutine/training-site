import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
// import { ReactComponent as Logo } from '../assets/logo.svg';
import mainLogo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import DropDown from './DropDown';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <header className='header'>
      <DropDown />
      <div className='logo'>
        <Link to='/'>
          {/* <h1>
            <Logo id='logo' />
          </h1> */}
          <img
            src={mainLogo}
            alt=''
            style={{ marginTop: '.4rem', width: '12rem' }}
          />
        </Link>
      </div>
      <ul>
        {user ? (
          <li>
            <Link to='/logout'>
              <button className='btn' onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
              <li>
                <Link to='/register'>
                  <FaUser /> Register
                </Link>
              </li>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
