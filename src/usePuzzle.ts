import { useMemo, useState, useCallback } from "react";
import countries from "./countries";

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

export default usePuzzle;
