import CardWorkshop from '../components/CardComponents/CardWorkshop';
import CardsData from '../data/CardsData.js';
import { useEffect, useState } from 'react';
import './Workshop.css';

const Workshop = () => {
  const [LinkGroup, setLinkGroup] = useState([]);
  const [datas, setData] = useState(CardsData);
  const newLink = ['ALL'];

  // Filter data when user click button
  const filterData = (type) => {
    if (type !== 'ALL') {
      setData(CardsData.filter((data) => data.type === type));
    } else setData(CardsData);
  };

  //UseEffect to generate button
  useEffect(() => {
    CardsData.forEach((card) => {
      if (newLink.indexOf(card.type) === -1) {
        return newLink.push(card.type);
      }
    });
    setLinkGroup(newLink);
    // eslint-disable-next-line
  }, [CardsData]);

  return (
    <section className="workshop" id="workshop">
      <div className="workshop-header header">
        <h1>MY WORKSHOP</h1>
      </div>

      <div className="workshop-link btn">
        {LinkGroup.map((element, index) => {
          return (
            <button key={index} onClick={() => filterData(element)}>
              {element}
            </button>
          );
        })}
      </div>

      <div className="workshop-card-area">
        {datas.map((item, id) => {
          return <CardWorkshop {...item} key={id} />;
        })}
      </div>
    </section>
  );
};
export default Workshop;
