import './Home.css';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello I,m</h3>
        <h1>Jeeranun Pingsahuan</h1>
        <div className="btn">
          <button>DOWLOAD CV</button>
          <button>
            <Link activeClass="active" smooth spy to="about">
              ABOUT ME
            </Link>
          </button>
        </div>
      </div>

      <div className="home-image">
        <img alt="img-profile" src="/nat.png"></img>
      </div>
    </section>
  );
};
export default Home;
