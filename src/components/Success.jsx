import "../styles/success.css";




export default function Success({ onBack }) {
  return (
    <div className="card success-page">
      
      {/* Falling Flowers */}
      <div className="flowers">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i} className="flower">🌸</span>
        ))}
      </div>

      <h2>🎉 Success!</h2>
      <p>My heart is full of happiness 💖</p>

      <button className="animated-btn" onClick={onBack}>Back ✨</button>
    </div>
  );
}
