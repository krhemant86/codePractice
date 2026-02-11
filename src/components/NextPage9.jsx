import "../styles/nextpage.css";
import emoji31 from "../assets/images/emoji31.png";
import FloatingBalloons from "./FloatingBalloons";




export default function NextPage({ onNext, onBack }) {
  return (
    <div className="card">
      <FloatingBalloons count={20} />
     <p className="line decorated">
  💫 I have no expectations of being your <span className="highlight">partner</span>.
</p>

<p className="line decorated">
  🌸 If I can be your <span className="highlight">healer</span>, even for a little while,  
  that is enough for me.
</p>

     
      <img
        src={emoji31}
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
