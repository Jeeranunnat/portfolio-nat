import { ThemeContext } from '../App';
import { useContext } from 'react';
import './About.css';
const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section id="about" className="about">
      <div className="about-header header">
        <h1>ABOUT ME</h1>
      </div>

      <div className="about-content">
        <div
          className={theme === 'light' ? 'aboutArea-light' : 'aboutArea-dark'}
        >
          <div className="area-left">
            <div className="image-profile">
              <img src={'./nat.png'} alt="image_profile"></img>
            </div>
          </div>
          <div className="area-right">
            <h1>
              <span>I am</span> Frontend Developer
            </h1>
            <p>
              I am Jeeranun Pingsahuan, junior web developer from Phuket,
              Thailand.I have rich experience in website design and building and
              customization,also I am good in React
            </p>
            <table>
              <tr>
                <th>Full Name</th>
                <td>:</td>
                <td>Jeeranun Pingsahuan</td>
              </tr>
              <tr>
                <th>Education</th>
                <td>:</td>
                <td>
                  Computer Engineering, Prince of Songkra University Phuket
                  Campus
                </td>
              </tr>
              <tr>
                <th>Address</th>
                <td>:</td>
                <td>30 Moo5 Kathu, Phuket 83120</td>
              </tr>
              <tr>
                <th>Phone Number</th>
                <td>:</td>
                <td>+66 086 743 0415</td>
              </tr>
              <tr>
                <th>E-mail</th>
                <td>:</td>
                <td>Jeeranun.code@gmail.com</td>
              </tr>
            </table>
            <div className="btn">
              <button>DOWLOAD CV</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
