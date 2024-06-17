// Component for rendering the Rock choice
function RockChoice({ className, onClick }) {
  return (
    // Div representing the Rock choice
    <div
      className={`rock-choice ${className}`} // Apply the base 'rock-choice' class and any additional classes passed through 'className' prop
      data-value="rock" // Set the data-value attribute to 'rock' to identify the choice
      onClick={onClick} // Call the onClick function when the div is clicked
    >
      {/* Inner div for displaying the choice icon */}
      <div className="choice">
        {/* Image for the Rock icon */}
        <img src={require("../assets/images/icon-rock.png")} alt="rock" />
      </div>
    </div>
  );
}

export default RockChoice;