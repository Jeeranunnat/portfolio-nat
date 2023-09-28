import './CardSkill.css';
const CardSkill = (item) => {
  return (
    <div className="cardSkill">
      <div className="cardSkill-icon">
        <div className="circle">{<item.icon />}</div>
      </div>
      <div className="cardSkill-skill">{item.skill}</div>
    </div>
  );
};
export default CardSkill;
