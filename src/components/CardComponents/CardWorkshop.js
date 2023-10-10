import './CardWorkshop.css';
import { useContext } from 'react';
import { ThemeContext } from '../../App';

const Card = (item) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id="cardWorkshop"
      className={theme === 'light' ? 'cardWorkshop-light' : 'cardWorkshop-dark'}
    >
      <div className="card-img">
        <img src={item.imagePath} alt={item.name}></img>
      </div>
      <div className="card-name">{item.name}</div>
      <div className="card-link link">
        <button>
          <a href={item.href}>Demo</a>
        </button>
      </div>
    </div>
  );
};
export default Card;
