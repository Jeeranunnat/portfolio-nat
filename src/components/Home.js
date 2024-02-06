import './Home.css';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello I,m</h3>
        <h1>Jeeranun Pingsahuan</h1>
        <div className="btn">
          <button>
            <a href="https://drive.google.com/file/d/1hY9KYq2E4FUDDhC5mlmqKZoJq04U7yuH/view?usp=share_link">
              DOWLOAD CV
            </a>
          </button>
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
