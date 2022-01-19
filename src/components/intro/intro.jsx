import "./intro.scss";
import Me from "../../../img/myself.png";
function Intro() {
  return (
    <div className="i" id="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2>Hello my name is</h2>
          <h1>Andrew DuMond</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Accountant</div>
              <div className="i-title-item">Investor</div>
              <div className="i-title-item">Student</div>
            </div>
          </div>
          <div className="i-description">
            <p>
              {" "}
              I am a self-taught digital designer certified in web development
              from Columbia University studying the language of business,
              Accounting. After acquiring a diverse professional background in
              various industries, I strive to understand the most impactful
              psychological, environmental, social, cultural, and personal
              factors that attract consumers to specific products and services.
            </p>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="Andrew DuMond Portrait" className="i-img" />
      </div>
    </div>
  );
}

export default Intro;
