import { useContext } from 'react';
import { ThemeContext } from '../App';
import './Footer.css';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      id="footer"
      className={theme === 'light' ? 'footer-light' : 'footer-dark'}
    >
      <p>© 2023 Jeeranun.</p>
    </section>
  );
};
export default Footer;
