import React from 'react';

const Buttons = (props) => {
  const {homeScore, awayScore, setHomeScore, setAwayScore} = props;

  return (
    <section className="buttons">
      <div className="homeButtons">
        <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 7)}>Home Touchdown</button>
        <button className="homeButtons__fieldGoal"onClick={() => setHomeScore(homeScore + 3)}>Home Field Goal</button>
      </div>
      <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick={() => setAwayScore(awayScore + 7)}>Away Touchdown</button>
        <button className="awayButtons__fieldGoal" onClick={() => setAwayScore(awayScore + 3)}>Away Field Goal</button>
      </div>
      <div className="reset">
        <button 
          className="reset_button" 
          onClick={() => {
            setHomeScore(0); 
            setAwayScore(0)
          }}
        >
          Game Over
        </button>
      </div>
    </section>
  )
}

export default Buttons;