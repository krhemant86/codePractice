import "../styles/nextpage.css";
import shayad from "../assets/images/shayad.jpeg";
import FloatingBalloons from "./FloatingBalloons";




export default function NextPage({ onNext, onBack }) {
  return (
    <div className="card">
      <FloatingBalloons count={20} />

<p className="line decorated">
  💭 Use pata nahi... wo kisi ki <span className="highlight life">life</span> mein kitna <span className="highlight meaning">maayne</span> rakhti hai
</p>

<p className="line decorated">
  🌸 Uske <span className="highlight thought">soch</span> se bhi badhkar
</p>


     
      <img
        src={shayad}
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
