export default function Score({ userScore, computerScore }) {
  return (
    <div className="score-section">
      <div>
        <h3>Player</h3>
        <p>{userScore}</p>
      </div>
      <div>
        <h3>Computer</h3>
        <p>{computerScore}</p>
      </div>
    </div>
  );
}
