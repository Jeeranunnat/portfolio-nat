import NavMenuData from '../data/NavMenuData';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';
import { useContext } from 'react';
import { Link } from 'react-scroll';
import { ThemeContext } from '../App';

import './Navigation.css';

const Navigation = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleSwitch = (check) => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav id="navbar" className={theme === 'light' ? 'nav-light' : 'nav-dark'}>
      <div className="navbar-logo">
        <h1>JEERANUN</h1>
      </div>

      <div className="navbar-link">
        <div className="navbar-link-button">
          {NavMenuData.map((menu, index) => {
            return (
              <li>
                <Link activeClass="active" smooth spy to={menu.path}>
                  {menu.title}
                </Link>
              </li>
            );
          })}
        </div>

        {/* nav-link-icon will show when use on mobile device */}
        <div className="navbar-link-icon">
          {NavMenuData.map((menu, index) => {
            return (
              <li>
                <Link activeClass="active" smooth spy to={menu.path}>
                  <menu.icon />
                </Link>
              </li>
            );
          })}
        </div>

        <div className="navbar-link-mode">
          <li onClick={toggleSwitch}>
            {theme === 'light' ? <BiSolidMoon /> : <BiSolidSun />}
          </li>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
