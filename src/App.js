import { Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import GameHome from "./pages/GameHome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<GameHome />} />
      </Routes>
    </div>
  );
}

export default App;
