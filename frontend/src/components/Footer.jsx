import { FaFacebookF, FaTwitter, FaInstagramSquare } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div
        className='footer-container'
        style={{ align: 'center', fontSize: '.7em' }}
      >
        <div style={{ width: '10em' }}>
          <a href='mailto:webmaster@dayafteryester.day'>Contact Us</a>
        </div>
        <div>
          <p style={{ fontSize: '.6rem' }}>
            &copy; Copyright 2022 dayafteryester.day
          </p>
        </div>
        <div style={{ width: '10em', display: 'inline-flex' }}>
          <div style={{ marginLeft: '.5em' }}>
            <a href='http://facebook.com' target='_blank'>
              <FaFacebookF />
            </a>
          </div>
          <div style={{ marginLeft: '.5em' }}>
            <a href='http://twitter.com' target='_blank'>
              <FaTwitter />
            </a>
          </div>
          <div style={{ marginLeft: '.5em' }}>
            <a href='http://instagram.com' target='_blank'>
              <FaInstagramSquare />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
