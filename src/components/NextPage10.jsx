import "../styles/nextpage.css";

import FloatingBalloons from "./FloatingBalloons";




export default function NextPage({ onNext, onBack }) {
  return (
    <div className="card">
      <FloatingBalloons count={20} />

            <div className="btn-row">
        
        <button className="animated-btn-i">🎀 The Promises 🎀</button>
      </div>
<p className="line decorated">
  🤝 Let's make a <span className="highlight">promise</span> this Promise Day:
</p>

<p className="line decorated">
  💪 Always do your <span className="highlight">best</span>.  
  If you can’t do the <span className="highlight">'best'</span>, then do the <span className="highlight">'better'</span>.
</p>

<p className="line decorated">
  🧡 And please, don't be an <span className="highlight">emotional fool</span>.
</p>

<p className="line decorated">
  ✨ Don't chase the <span className="highlight">constant thrill</span>.
</p>

<p className="line decorated">
  🌱 Remember: <span className="highlight">Good things</span> are often <span className="highlight">boring</span>.  
  They lack the spice and the drama, but in the end, they are what’s <span className="highlight">best</span> for us.
</p>


      <div className="btn-row">
        <button className="animated-btn" onClick={onBack}>Back ✨</button>
        <button className="animated-btn" onClick={onNext}>Next 🎀</button>
      </div>
    </div>
  );
}
