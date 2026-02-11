import "../styles/nextpage.css";

import FloatingBalloons from "./FloatingBalloons";




export default function NextPage({ onNext, onBack }) {
  return (
    <div className="card">
      <FloatingBalloons count={20} />
<p className="line decorated">
  😔 Pata nahi aaj kal kyun <span className="highlight">udas</span> rehti hai...
</p>

<p className="line decorated">
  👓 Shayad uske chashme par <span className="highlight">past ka dhool</span> hai
</p>

<p className="line decorated">
  ⏳ Jiske karan wo <span className="highlight">present aur future</span> nahi dekh pa rahi hai...
</p>

<p className="line decorated">
  ✨ Jo ki uske <span className="highlight">past</span> se <span className="highlight">lakh</span> guna behtar hai...
</p>



      <div className="btn-row">
        <button className="animated-btn" onClick={onBack}>Back ✨</button>
        <button className="animated-btn" onClick={onNext}>Next 🎀</button>
      </div>
    </div>
  );
}
