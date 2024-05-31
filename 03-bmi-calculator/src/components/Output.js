export default function Output({ BMI }) {
  return (
    <div className="output-section">
      <p>Your BMI is</p>
      <div className="output">{BMI}</div>
    </div>
  );
}
