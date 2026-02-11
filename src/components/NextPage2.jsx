import "../styles/nextpage.css";
import gussle from "../assets/images/gussle.jpeg";
import FloatingBalloons from "./FloatingBalloons";




export default function NextPage({ onNext, onBack }) {
  return (
    <div className="card">
       <FloatingBalloons count={20} />
      <p className="line decorated">
  😤 Utni <span className="highlight">gussle</span> bhi!
</p>

     
      <img
        src={gussle}
        alt="Love"
        className="next-img"
      />

      

      <div className="btn-row">
        <button className="animated-btn" onClick={onBack}>Back ✨</button>
        <button className="animated-btn" onClick={onNext}>Next 🎀</button>
      </div>
    </div>
  );
}
