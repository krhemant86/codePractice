import "../styles/nextpage.css";
import last from "../assets/images/last.jpeg";
import FloatingBalloons from "./FloatingBalloons";




export default function NextPage({ onNext, onBack }) {
  return (
    <div className="card">
      <FloatingBalloons count={20} />
      <p className="line decorated">
  🌟 In short: Make your <span className="highlight">today</span> better than your <span className="highlight">yesterday</span>.
</p>

     
      <img
        src={last}
        alt="Love"
        className="next-img"
      />

      

      <div className="btn-row">
        <button className="animated-btn" onClick={onBack}>Back ✨</button>

      </div>
    </div>
  );
}
