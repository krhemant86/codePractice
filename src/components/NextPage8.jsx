import "../styles/nextpage.css";
import emoji21 from "../assets/images/emoji21.png";
import FloatingBalloons from "./FloatingBalloons";




export default function NextPage({ onNext, onBack }) {
  return (
    <div className="card">
      <FloatingBalloons count={20} />
      <p className="line decorated">
  🌿 I keep wishing for you to always stay <span className="highlight">evergreen</span>.
</p>

<p className="line decorated">
  💖 Remember one thing: if you are <span className="highlight">happy</span>, then I am even happier.
</p>

     
      <img
        src={emoji21}
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
