import { useMemo, useState, useCallback } from "react";
import countries, { continents } from "./countries";

import "./App.css";
import classNames from "classnames";

const isLoggingEnabled = false;

interface Country {
  name: string;
  flag: string;
  continent: string;
  embedUrl: string;
  funFacts: string[];
}

const usePuzzle = () => {
  const [puzzleCounter, setPuzzleCounter] = useState(0);

  // TODO: Make this configurable
  const filteredCountries = useMemo(
    () =>
      countries.filter((country) => country.continent === continents.europe),
    []
  );

  const country = useMemo(() => {
    if (isLoggingEnabled) {
      console.log(`Starting puzzle #${puzzleCounter}`);
    }
    const countryIndex = Math.floor(Math.random() * filteredCountries.length);
    return {
      ...filteredCountries[countryIndex],
      funFact:
        filteredCountries[countryIndex].funFacts[
          Math.floor(
            Math.random() * filteredCountries[countryIndex].funFacts.length
          )
        ],
    };
  }, [filteredCountries, puzzleCounter]);

  const choices = useMemo(() => {
    const otherChoices = filteredCountries
      .filter((countryToKeep) => countryToKeep.name !== country.name)
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);
    return [country, ...otherChoices].sort(() => Math.random() - 0.5);
  }, [filteredCountries, country]);

  const [selectedChoice, setSelectedChoice] = useState<Country | null>(null);

  const onSelectChoice = useCallback(
    (choice: Country) => {
      setSelectedChoice(choice);
      if (choice === country) {
        setTimeout(() => {
          setPuzzleCounter((currentValue) => currentValue + 1);
          setSelectedChoice(null);
        }, 1000);
      }
    },
    [country]
  );

  return { country, choices, selectedChoice, onSelectChoice };
};

const App = () => {
  const { country, choices, selectedChoice, onSelectChoice } = usePuzzle();

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

export default App;
