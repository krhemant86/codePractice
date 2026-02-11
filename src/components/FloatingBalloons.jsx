
import "../styles/floatingballoons.css";

export default function FloatingBalloons({ count = 15 }) {
  return (
    <div className="balloons-container">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="balloon"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
          }}
        >
          🎈
        </div>
      ))}
    </div>
  );
}
