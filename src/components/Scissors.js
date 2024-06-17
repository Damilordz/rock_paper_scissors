// Component for rendering the Scissors choice
function ScissorsChoice({ className, onClick }) {
  return (
    // Div representing the Scissors choice
    <div
      className={`scissors-choice ${className}`} // Apply the base 'scissors-choice' class and any additional classes passed through 'className' prop
      data-value="scissors" // Set the data-value attribute to 'scissors' to identify the choice
      onClick={onClick} // Call the onClick function when the div is clicked
    >
      {/* Inner div for displaying the choice icon */}
      <div className="choice">
        {/* Image for the Scissors icon */}
        <img
          src={require("../assets/images/icon-scissors.png")}
          alt="scissors"
        />
      </div>
    </div>
  );
}

export default ScissorsChoice;