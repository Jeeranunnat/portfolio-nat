import NavMenuData from '../data/NavMenuData';
import { Link } from 'react-router-dom';
import { BiSolidSun } from 'react-icons/bi';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar" id="navbar">
      <div className="logo">
        <h1>JEERANUN</h1>
      </div>

      <div className="link">
        <div className="button">
          {NavMenuData.map((menu, index) => {
            return (
              <li path={menu.title} key={index}>
                <Link to={menu.path}>{menu.title}</Link>
              </li>
            );
          })}
        </div>
        <div className="mode">
          <BiSolidSun />
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
