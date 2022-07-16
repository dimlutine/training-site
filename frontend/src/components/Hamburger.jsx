import { ReactComponent as NavHamburger } from '../assets/hamburger.svg';

function Hamburger(toggled) {
  console.log(toggled);
  return (
    <div>
      <NavHamburger className={`hamburger ${toggled && 'hideit'}`} />
    </div>
  );
}
export default Hamburger;
