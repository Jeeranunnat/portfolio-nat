import './Home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello I,m</h3>
        <h1>Jeeranun Pingsahuan</h1>
        <div className="btn">
          <button>DOWLOAD CV</button>
          <button>
            <a href="#about">ABOUT ME</a>
          </button>
        </div>
      </div>

      <div className="home-image">
        <img alt="img-profile" src="/nat.jpg"></img>
      </div>
    </section>
  );
};
export default Home;
