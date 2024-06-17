// Function component that renders the game header
function GameHeader({ score }) {
  return (
    <div className="game-header">
      {/* Game title section */}
      <div className="game-title">
        {/* Display the game title */}
        <h4>Rock</h4>
        <h4>Paper</h4>
        <h4>Scissors</h4>
      </div>

      {/* Game score section */}
      <div className="game-score">
        {/* Display the label for the score */}
        <p>Score</p>
        {/* Display the current score */}
        <h3>{score}</h3>
      </div>
    </div>
  );
}

export default GameHeader;