import "../styles/nextpage.css";
import sensitive from "../assets/images/sensitive.jpeg";
import FloatingBalloons from "./FloatingBalloons";




export default function NextPage({ onNext, onBack }) {
  return (
    <div className="card">
       <FloatingBalloons count={20} />
      
        <p className="line decorated">
  💖 Wo jitni <span className="highlight">sensitive</span> hai...
</p>

      <img
        src={sensitive}
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
