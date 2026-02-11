import "../styles/nextpage.css";
import mastikhor from "../assets/images/mastikhor.jpeg";
import FloatingBalloons from "./FloatingBalloons";




export default function NextPage({ onNext, onBack }) {
  return (
    <div className="card">
      <FloatingBalloons count={20} />
      <p className="line decorated">
  🎉😜 Itna <span className="highlight">masti-khor</span> hone ke wajood bhi... 💫
</p>

     
      <img
        src={mastikhor}
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
