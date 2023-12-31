import SkillData from '../data/SkillData';
import CardSkill from '../components/CardComponents/CardSkill';
import './Skill.css';

const Skill = () => {
  return (
    <section className="skill" id="skill">
      <div className="skill-header header">
        <h1>MY SKILL</h1>
      </div>

      <div className="skill-content">
        {SkillData.map((skill, index) => {
          return <CardSkill {...skill} key={index} />;
        })}
      </div>
    </section>
  );
};
export default Skill;
