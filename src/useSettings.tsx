import { useState, useCallback } from "react";
import { continents } from "./countries";

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

export default useSettings;
