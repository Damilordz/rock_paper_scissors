// Import the choice components
import PaperChoice from "./Paper";
import RockChoice from "./Rock";
import ScissorsChoice from "./Scissors";

// Functional component to render the user's choice options
function UserChoice({ userChoiceClick }) {
  return (
    <div className="user-choices">
      {/* Div to display the background triangle */}
      <div className="game-triangle">
        <img
          src={require("../assets/images/bg-triangle.png")}
          alt="bg-triangle"
        />
      </div>

      {/* Paper choice component */}
      <PaperChoice
        className="user-paper" // Additional CSS class
        onClick={userChoiceClick} // Function to handle user's choice click
      />

      {/* Scissors choice component */}
      <ScissorsChoice
        className="user-scissors" // Additional CSS class
        onClick={userChoiceClick} // Function to handle user's choice click
      />

      {/* Rock choice component */}
      <RockChoice
        className="user-rock transform-center" // Additional CSS classes
        onClick={userChoiceClick} // Function to handle user's choice click
      />
    </div>
  );
}

export default UserChoice;