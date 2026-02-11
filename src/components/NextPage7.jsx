import "../styles/nextpage.css";
import emoji1 from "../assets/images/emoji1.png";
import FloatingBalloons from "./FloatingBalloons";




export default function NextPage({ onNext, onBack }) {
  return (
    <div className="card">
      <FloatingBalloons count={20} />
      <p className="line decorated">
  🤔 Lagta hai ye uska <span className="highlight">bevkoof wala period</span> hai...
</p>

<p className="line decorated">
  🙈 Aur hum <span className="highlight">bhool gaye hain</span>...  
  wo jitni <span className="highlight">bevkoof</span> hai, utni hi <span className="highlight">samajhdar</span> bhi...
</p>

<p className="line decorated">
  😎 Yani, <span className="highlight">dul jhadne ki bari</span> aayegi!
</p>

     
      <img
        src={emoji1}
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
