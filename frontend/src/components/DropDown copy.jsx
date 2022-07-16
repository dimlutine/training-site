import { Link } from 'react-router-dom';
import { useState } from 'react';
import Hamburger from './Hamburger';
import Ecks from './Ecks';

const links = [
  {
    to: '/',
    name: 'Home',
    key: 1,
  },
  {
    to: '/python',
    name: 'Python',
    key: 2,
  },
  {
    to: '/javascript',
    name: 'JavaScript',
    key: 3,
  },
];

function DropDown() {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
    console.log(hover);
  };

  return (
    <nav
      className='dropdown'
      onMouseOver={toggleHover}
      onMouseLeave={toggleHover}
      //   onTouchStart={toggleHover}
    >
      {/* <button className='btn dropbtn'>Nav</button> */}
      <div className={`dropdown ${hover && 'hideit'}`}>
        <button className='btn dropbtn'>
          <Hamburger />
        </button>
      </div>
      <ul className={`dropdown ${hover && 'hideit'}`}>
        {links.map((link) => (
          <li>
            <Link key={link.key} to={link.to}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* {hover && (
        
      )} */}
    </nav>
  );
}
export default DropDown;
