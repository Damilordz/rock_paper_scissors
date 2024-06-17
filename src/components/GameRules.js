// Function component that renders the game rules modal
function GameRules({ showRules, closeRules }) {
  return (
    // Overlay div for the game rules modal
    <div
      className="rules-overlay" // CSS class for the overlay
      style={{ display: showRules ? "flex" : "none" }} // Show or hide the modal based on the showRules prop
    >
      {/* Wrapper div for the rules content */}
      <div className="rules-wrap">
        {/* Row div for the rules header */}
        <div className="rules-row">
          {/* Title for the rules */}
          <h4 className="text-[3rem] font-[600]">RULES</h4>
          {/* Close button */}
          <i
            className="fa-solid fa-xmark fa-2xl cursor-pointer" // FontAwesome icon for the close button
            onClick={closeRules} // Call the closeRules function when clicked
          ></i>
        </div>
        {/* Image showing the game rules */}
        <img
          src={require("../assets/images/image-rules.png")} // Import the rules image
          alt="game rules" // Alternative text for the image
        />
      </div>
    </div>
  );
}

export default GameRules;