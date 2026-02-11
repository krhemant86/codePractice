import "../styles/nextpage.css";
import emoji41 from "../assets/images/emoji41.png";
import FloatingBalloons from "./FloatingBalloons";




export default function NextPage({ onNext, onBack }) {
  return (
    <div className="card">
      <FloatingBalloons count={20} />
<p className="line decorated">
  😎 In <span className="highlight">bro code</span>...
</p>

<p className="line decorated">
  ✨ Simple <span className="highlight">mast</span> rahne ka...
</p>

<p className="line decorated">
  🚫 Tension lene ka nahi, <span className="highlight">dene</span> ka...
</p>


     
      <img
        src={emoji41}
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
