export default function Input({ weight, height, onWeight, onHeight }) {
  return (
    <div className="input-section">
      <label htmlFor="weight">Weight: {weight} kg</label>
      <input
        type="range"
        min="40"
        max="220"
        value={weight}
        onChange={(e) => onWeight(Number(e.target.value))}
      />

      <label htmlFor="height">Height: {height} cm</label>
      <input
        type="range"
        min="140"
        max="220"
        value={height}
        onChange={(e) => onHeight(Number(e.target.value))}
      />
    </div>
  );
}
