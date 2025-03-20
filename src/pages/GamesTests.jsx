import React from "react";
import "../styles/GamesTests.css";

const GamesTests = () => {
  const gamesLinks = [
    { text: "Personality Test - Psychology Today", url: "https://www.psychologytoday.com/us/tests/personality" },
    { text: "Personality Test - 123Test (1)", url: "https://www.123test.com/personality-test/" },
    { text: "Personality Test - 123Test (2)", url: "https://www.123test.com/personality-test/" },
    { text: "Quizzes - Psych Central", url: "https://psychcentral.com/program/quizzes" }
  ];

  return (
    <div className="games-tests-container">
      <h2>Games and Tests</h2>
      <div className="flashcards-container">
        {gamesLinks.map((game, index) => (
          <div key={index} className="flashcard" onClick={() => window.open(game.url, "_blank")}> 
            {game.text}
          </div>
        ))}
      </div>
      <button className="back-button" onClick={() => window.history.back()}>Back to Dashboard</button>
    </div>
  );
};

export default GamesTests;
