import "../styles/nextpage.css";
import infinite from "../assets/images/infinite.png";

import FloatingBalloons from "./FloatingBalloons";




export default function NextPage({ onNext, onBack }) {
  return (
    <div className="card">
       <FloatingBalloons count={20} />
      <p className="line decorated">
  ⚡🔥 Har chij mein <span className="highlight">extreme</span>  hai... 😎
</p>

      
          <img
        src={infinite}
        alt="Love"
        className="next-img-i"
      />







      

      <div className="btn-row">
        <button className="animated-btn" onClick={onBack}>Back ✨</button>
        <button className="animated-btn" onClick={onNext}>Next 🎀</button>
      </div>
    </div>
  );
}
