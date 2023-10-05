import './CardSkill.css';
import { useContext } from 'react';
import { ThemeContext } from '../../App';
const CardSkill = (item) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id="cardSkill"
      className={theme === 'light' ? 'cardSkill-light' : 'cardSkill-dark'}
    >
      <div className="cardSkill-icon">
        <div className="circle">{<item.icon />}</div>
      </div>

      <div className="cardSkill-skill">{item.skill}</div>
    </div>
  );
};
export default CardSkill;
