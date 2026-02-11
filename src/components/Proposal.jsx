import "../styles/proposal.css";
import FloatingBalloons from "../components/FloatingBalloons";
import pic1 from "../assets/images/ashi1.png";

export default function Proposal({ onYes }) {
  return (
    <div className="card">
      <FloatingBalloons count={20} />



<h2 className="main-header">
  ✨ For my <span className="highlight">golden-hearted best friend</span> ✨
</h2>

<h2 className="main-header">
  💫 Who is a <span className="highlight">reflection of my soul</span> 💫
</h2>

            <img
        src={pic1}
        alt="Love"
        className="next-img"
      />

      <button className="animated-btn" onClick={onYes}>Next 🎀</button>
    </div>
  );
}
