import classNames from "classnames";

import usePuzzle from "./usePuzzle";

import "./Puzzle.css";

const Puzzle = ({ selectedContinents }: { selectedContinents: string[] }) => {
  const { country, choices, selectedChoice, onSelectChoice } = usePuzzle({
    selectedContinents,
  });

  return (
    <main>
      <div className="map">
        <iframe
          title={country.name}
          src={`https://www.google.com/maps/embed?pb=${country.embedUrl}`}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="content">
        <div className="header">
          <h2>{country.name}</h2>
          <p>{country.funFact}</p>
        </div>
        <div className="flag-selection-container">
          <div className="flag-selection-wrapper">
            {choices.map((choice) => (
              <div
                key={choice.name}
                className={classNames("flag-selection", {
                  selected: selectedChoice === choice,
                  correct: selectedChoice === country,
                  incorrect: selectedChoice && selectedChoice !== country,
                })}
              >
                <button
                  key={choice.name}
                  onClick={() => {
                    onSelectChoice(choice);
                  }}
                >
                  {choice.flag}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Puzzle;
