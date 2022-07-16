import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-modal';
import Hamburger from './Hamburger';
import Ecks from './Ecks';

const customStyles = {
  content: {
    // width: '600px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    width: '30%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%',
    position: 'relative',
    height: '80%',
    borderRadius: '10px',
    border: 'solid',
    borderColor: 'rgb(10, 10, 10)',
    backgroundColor: 'rgb(250, 250, 250)',
  },
};

Modal.setAppElement('#root');

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
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
    console.log(hover);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <nav>
      <Modal
        closeTimeoutMS={500}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Nav'
      >
        <div className='dropdown'>
          <ul>
            {links.map((link) => (
              <li className='modalList'>
                <Link key={link.key} to={link.to}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Modal>
      <button
        id='navbutton'
        className='dropdown btn dropbtn'
        onClick={openModal}
      >
        <Hamburger toggled={modalIsOpen} />
      </button>
    </nav>
  );
}
export default DropDown;
