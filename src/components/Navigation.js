import NavMenuData from '../data/NavMenuData';
import { HashLink } from 'react-router-hash-link';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';
import './Navigation.css';
import { useContext } from 'react';
import { ThemeContext } from '../App';

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
                <HashLink smooth to={menu.path}>
                  {menu.title}
                </HashLink>
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
