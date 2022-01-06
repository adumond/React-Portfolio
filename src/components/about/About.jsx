import "./about.css";
import Compstock from "../../img/compstock.png";
const about = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"> </div>
        <div className="a-card"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/10131778/pexels-photo-10131778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="tree"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
          eius qui ad accusantium, modi reiciendis excepturi est fugit nobis
          dolore consectetur itaque temporibus asperiores saepe eligendi ea
          exercitationem tempora iste.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus repudiandae in, corrupti exercitationem dolore porro.
          Dignissimos esse, vero tenetur, non vel animi alias libero voluptates
          temporibus maiores sed nisi velit?
        </p>
        <div className="a-Compstock">
          <img src={Compstock} alt="" className="a-Compstock-img" />
          <div className="a-award-texts"></div>
        </div>
      </div>
    </div>
  );
};

export default about;
