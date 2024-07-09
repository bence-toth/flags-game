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

const usePuzzle = ({
  selectedContinents,
}: {
  selectedContinents: string[];
}) => {
  const [puzzleCounter, onSetPuzzleCounter] = useState(0);

  const filteredCountries = useMemo(
    () =>
      countries.filter((country) =>
        selectedContinents.includes(country.continent)
      ),
    [selectedContinents]
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
          onSetPuzzleCounter((currentValue) => currentValue + 1);
          setSelectedChoice(null);
        }, 1000);
      }
    },
    [country]
  );

  return { country, choices, selectedChoice, onSelectChoice };
};

const localStorageKey = "selected-continents";

const useSettings = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const onToggleSettings = useCallback(() => {
    setIsSettingsOpen((currentValue) => !currentValue);
  }, []);

  const [selectedContinents, onSetSelectedContinents] = useState<string[]>(
    localStorage.getItem(localStorageKey) !== null
      ? JSON.parse(localStorage.getItem(localStorageKey) as string)
      : Object.values(continents)
  );

  const isContinentSelected = (continent: string) =>
    selectedContinents.includes(continent);

  const onToggleContinent = (continent: string) => {
    const newSelectedContinents = isContinentSelected(continent)
      ? selectedContinents.filter(
          (selectedContinent) => selectedContinent !== continent
        )
      : [...selectedContinents, continent];
    if (newSelectedContinents.length === 0) {
      return;
    }
    onSetSelectedContinents(newSelectedContinents);
    localStorage.setItem(
      localStorageKey,
      JSON.stringify(newSelectedContinents)
    );
  };

  return {
    isSettingsOpen,
    onToggleSettings,
    selectedContinents,
    onToggleContinent,
    isContinentSelected,
  };
};

const App = () => {
  const {
    isSettingsOpen,
    onToggleSettings,
    selectedContinents,
    onToggleContinent,
    isContinentSelected,
  } = useSettings();

  const { country, choices, selectedChoice, onSelectChoice } = usePuzzle({
    selectedContinents,
  });

  return (
    <>
      {isSettingsOpen && (
        <div className="settings">
          <h2>Continents</h2>
          <ul>
            {Object.values(continents).map((continent) => (
              <li key={continent}>
                <p>
                  <button
                    onClick={() => {
                      onToggleContinent(continent);
                    }}
                  >
                    {isContinentSelected(continent) ? "✅" : "⬜️"} {continent}
                  </button>
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button className="settings-button" onClick={onToggleSettings}>
        ⚙️
      </button>
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
    </>
  );
};

export default App;
