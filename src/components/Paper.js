// Component for rendering the Paper choice
function PaperChoice({ className, onClick }) {
  return (
    // Div representing the Paper choice
    <div
      className={`paper-choice ${className}`} // Apply the base 'paper-choice' class and any additional classes passed through 'className' prop
      data-value="paper" // Set the data-value attribute to 'paper' to identify the choice
      onClick={onClick} // Call the onClick function when the div is clicked
    >
      {/* Inner div for displaying the choice icon */}
      <div className="choice">
        {/* Image for the Paper icon */}
        <img src={require("../assets/images/icon-paper.png")} alt="paper" />
      </div>
    </div>
  );
}

export default PaperChoice;