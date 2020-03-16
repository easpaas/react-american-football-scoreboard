import React, {useState} from "react";
import "./App.css";
import Buttons from "./Buttons";
import Scoreboard from "./Scoreboard";

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  

  return (
    <div className="container">
      <Scoreboard 
        homeScore={homeScore}
        awayScore={awayScore} 
      />
      <Buttons 
        homeScore={homeScore}
        awayScore={awayScore} 
        setHomeScore={setHomeScore}
        setAwayScore={setAwayScore}
      />
    </div>
  );
}

export default App;
