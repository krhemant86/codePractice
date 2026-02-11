import "../styles/nextpage.css";
import loveImg from "../assets/images/golu.jpeg";
import FloatingBalloons from "./FloatingBalloons";

export default function NextPage({ onNext, onBack }) {
  return (
    <div className="card">
      <FloatingBalloons count={20} />

      

<p className="line decorated">
  💫 Wo jitni <span className="highlight">samajhdar</span> hai...
</p>

<p className="line decorated">
  Utni hi <span className="highlight">bevkoof</span> bhi 💖
</p>


      <img
        src={loveImg}
        alt="Love"
        className="next-img"
      />

      

      <div className="btn-row">
        <button className="animated-btn" onClick={onBack}>
          Back ✨
        </button>
        <button className="animated-btn" onClick={onNext}>
          Next 🎀
        </button>
      </div>
    </div>
  );
}
