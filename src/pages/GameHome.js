import { useState } from "react"; // Import the useState hook from React

// Import custom components
import ChoiceSelect from "../components/ChoiceSelect";
import GameHeader from "../components/GameHeader";
import UserChoice from "../components/UserChoice";
import GameRules from "../components/GameRules";

function GameHome() {
  // Define state variables using the useState hook
  const [result, setResult] = useState(null); // Track game result
  const [score, setScore] = useState(5); // Track user's score
  const [userChoice, setUserChoice] = useState(null); // Track user's choice
  const [computerChoice, setComputerChoice] = useState(null); // Track computer's choice
  const [userWin, setUserWin] = useState(null); // Track if user won or not
  const [showRules, setShowRules] = useState(false); // Track if rules modal should be shown
  const [gameEnded, setGameEnded] = useState(false); // Track if the game has ended
  const options = ["rock", "paper", "scissors"]; // Array of possible choices
  

  // Function to handle user's choice
  const handleChoiceClick = (e) => {
    const userSelection = e.currentTarget.getAttribute("data-value"); // Get user's choice from event
    setUserChoice(userSelection); // Update user's choice in state

    // After 1 second, generate computer's choice and determine game result
    setTimeout(() => {
      const randNum = Math.floor(Math.random() * 3); // Generate random number between 0 and 2
      const compChoice = options[randNum]; // Get computer's choice from the options array
      setComputerChoice(compChoice); // Update computer's choice in state
      gameDecider(userSelection, compChoice); // Determine game result
      setGameEnded(true); // Set gameEnded to true
    }, 1000);
  };

  // Function to determine game result
  function gameDecider(userChoice, computerChoice) {
    // Check all possible winning combinations for the user
    if (
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      setResult("YOU WIN"); // Update result in state
      setScore((prevScore) => prevScore + 1); // Increment user's score
      setUserWin(true); // Set userWin to true
    } else if ( // Check all possible losing combinations for the user
      (computerChoice === "paper" && userChoice === "rock") ||
      (computerChoice === "rock" && userChoice === "scissors") ||
      (computerChoice === "scissors" && userChoice === "paper")
    ) {
      setResult("YOU LOSE"); // Update result in state
      setScore((prevScore) => Math.max(prevScore - 1, 0)); // Decrement user's score, but not below 0
      setUserWin(false); // Set userWin to false
    } else { // If none of the above conditions are met, it's a draw
      setResult("DRAW"); // Update result in state
      setUserWin(null); // Set userWin to null
    }
  }

  // Function to handle play again button click
  const handlePlayAgain = () => {
    setUserChoice(null); // Reset user's choice
    setComputerChoice(null); // Reset computer's choice
    setResult(null); // Reset result
    setGameEnded(false); // Set gameEnded to false
  };

  // Function to show rules modal
  const displayRules = () => {
    setShowRules(true); // Set showRules to true
  };

  // Function to close rules modal
  const closeRules = () => {
    setShowRules(false); // Set showRules to false
  };

  return (
    <div className="game-container">
      <GameHeader score={score} /> {/* Render GameHeader component and pass score as a prop */}
      <div className="game-wrap">
        {/* Conditionally render UserChoice or ChoiceSelect component based on userChoice */}
        {!userChoice ? (
          <UserChoice userChoiceClick={handleChoiceClick} />
        ) : (
          <ChoiceSelect
            userChoice={userChoice}
            computerChoice={computerChoice}
            result={result}
            onPlayAgain={handlePlayAgain}
            isGameOver={score <= 0}
            userWin={userWin}
            gameEnded={gameEnded}
          />
        )}
      </div>
      <div className="rules-btn">
        <button
          className="text-white text-center border-2 py-2 px-12 rounded-[1rem] hover:bg-slate-100 hover:text-blue-500"
          onClick={displayRules}
        >
          RULES
        </button>
      </div>
      <GameRules showRules={showRules} closeRules={closeRules} /> {/* Render GameRules component and pass showRules and closeRules as props */}
    </div>
  );
}

export default GameHome;