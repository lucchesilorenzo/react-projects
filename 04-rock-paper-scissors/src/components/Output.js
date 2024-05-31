export default function Output({
  userShape,
  computerShape,
  userScore,
  computerScore,
}) {
  return (
    <div className="output-section">
      {userScore === 10 ? (
        <p>Player won!</p>
      ) : computerScore === 10 ? (
        <p>Computer won!</p>
      ) : (
        <>
          <p>Player's choice: {userShape}</p>
          <p>Computer's choice: {computerShape}</p>
        </>
      )}
    </div>
  );
}
