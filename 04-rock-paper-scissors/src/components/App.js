import { useState } from "react";
import Header from "./Header";
import Score from "./Score";
import Menu from "./Menu";
import Output from "./Output";
import { shapes } from "../shapes";

export default function App() {
  const [userShape, setUserShape] = useState("");
  const [computerShape, setComputerShape] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  function handleUserShape(shape) {
    setUserShape(shape);
    const computerShape = handleComputerShape();
    handleGame(shape, computerShape);
  }

  function handleComputerShape() {
    const computerShapes = shapes.map((computerShape) => computerShape.shape);
    const randomIndex = Math.floor(Math.random() * computerShapes.length);
    const selectedShape = computerShapes[randomIndex];
    setComputerShape(selectedShape);
    return selectedShape;
  }

  function handleGame(userShape, computerShape) {
    if (userShape === computerShape) {
      // Tie, no score change
    } else if (
      (userShape === "Rock" && computerShape === "Scissors") ||
      (userShape === "Scissors" && computerShape === "Paper") ||
      (userShape === "Paper" && computerShape === "Rock")
    ) {
      setUserScore((score) => score + 1);
    } else {
      setComputerScore((score) => score + 1);
    }
  }

  function handleResetGame() {
    setUserShape("");
    setComputerShape("");
    setUserScore(0);
    setComputerScore(0);
  }

  return (
    <div className="app">
      <Header />
      <Score userScore={userScore} computerScore={computerScore} />
      {userScore === 10 || computerScore === 10 ? (
        <button className="shape-btn" onClick={handleResetGame}>
          Play Again
        </button>
      ) : (
        <Menu onUserShape={handleUserShape} />
      )}
      <Output
        userShape={userShape}
        computerShape={computerShape}
        userScore={userScore}
        computerScore={computerScore}
      />
    </div>
  );
}
