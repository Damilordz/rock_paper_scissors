// Import custom components
import PaperChoice from "./Paper";
import RockChoice from "./Rock";
import ScissorsChoice from "./Scissors";

function ChoiceSelect({
  userChoice, // User's choice (rock, paper, or scissors)
  computerChoice, // Computer's choice (rock, paper, or scissors)
  result, // Game result (win, lose, or draw)
  onPlayAgain, // Function to handle "Play Again" button click
  isGameOver, // Flag indicating if the game is over (user's score is 0)
  userWin, // Flag indicating if the user won or not
  gameEnded, // Flag indicating if the game has ended
}) {
  // Function to render the choice component (Rock, Paper, or Scissors) with appropriate styles
  const renderChoice = (choice, isWinner) => {
    switch (choice) {
      case "paper":
        return (
          <PaperChoice
            className={`choice-display ${isWinner && "win-choice"}`}
          />
        );
      case "rock":
        return (
          <RockChoice
            className={`choice-display ${isWinner && "win-choice"}`}
          />
        );
      case "scissors":
        return (
          <ScissorsChoice
            className={`choice-display ${isWinner && "win-choice"}`}
          />
        );
      default:
        return null;
    }
  };

  // Determine the button class based on the game result and if the game is over
  const buttonClass =
    "play-again-btn " +
    (isGameOver || userWin === false ? "text-red-600" : "text-blue-600");

  // Determine the result class based on the game result
  const resultClass =
    result === "YOU WIN"
      ? "text-green-500"
      : result === "YOU LOSE"
      ? "text-red-500"
      : "text-gray-500";

  return (
    <div className="choice-select">
      <div className="user-select">
        <h4>You Picked</h4>
        <div
          className={`user-choice-select choice-select-bg ${
            gameEnded && userWin === true && "highlight-win"
          }`}
        >
          {/* Render the user's choice component with appropriate styles */}
          {renderChoice(userChoice, gameEnded && userWin === true)}
        </div>
      </div>
      {/* Only render the result and "Play Again" button if the computer's choice is available */}
      {computerChoice && (
        <div className="play-again">
          <h3 className={`font-[600] text-[3rem] text-center ${resultClass}`}>
            {/* Render either the game result or "GAME OVER" message */}
            {isGameOver ? (
              <div className="text-center">
                YOU LOSE <br /> GAME OVER
              </div>
            ) : (
              result
            )}
          </h3>
          {/* Render the "Play Again" button with appropriate text and styles */}
          <button className={buttonClass} onClick={onPlayAgain}>
            {isGameOver ? "TRY AGAIN" : "PLAY AGAIN"}
          </button>
        </div>
      )}
      <div className="computer-select">
        <h4>The House Picked</h4>
        <div
          className={`computer-choice-select choice-select-bg ${
            gameEnded && userWin === false && "highlight-win"
          }`}
        >
          {/* Render the computer's choice component with appropriate styles */}
          {renderChoice(computerChoice, gameEnded && userWin === false)}
        </div>
      </div>
    </div>
  );
}

export default ChoiceSelect;