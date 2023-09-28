// import { HiDownload } from 'react-icons/hi';
// import { RiAccountCircleLine } from 'react-icons/ri';
import './Home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Hello I,m</h3>
        <h1>Jeeranun Pingsahuan</h1>
        <div className="btn">
          <button>DOWLOAD CV</button>
          <button>ABOUT ME</button>
        </div>
      </div>
      <div className="profile-img">
        <img alt="img-profile" src="/nat.jpg"></img>
      </div>
    </section>
  );
};
export default Home;
