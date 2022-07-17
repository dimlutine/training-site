import { ReactComponent as NavHamburger } from '../assets/hamburger.svg';

function Hamburger(toggled) {
  console.log(toggled);
  return (
    <div className={`hamburger ${toggled && 'hideit'}`}>
      <NavHamburger />
    </div>
  );
}
export default Hamburger;
