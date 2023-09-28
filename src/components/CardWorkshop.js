import './CardWorkshop.css';
const Card = (item) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={item.imageUrl} alt={item.name}></img>
      </div>
      <div className="card-name">{item.name}</div>
      <div className="card-link">
        <button>Demo</button>
      </div>
    </div>
  );
};
export default Card;
