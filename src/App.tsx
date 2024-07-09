import Puzzle from "./Puzzle";
import Settings from "./Settings";
import useSettings from "./useSettings";

const App = () => {
  const {
    isSettingsOpen,
    onToggleSettings,
    selectedContinents,
    onToggleContinent,
    isContinentSelected,
  } = useSettings();

  return (
    <>
      <Settings
        isSettingsOpen={isSettingsOpen}
        onToggleSettings={onToggleSettings}
        onToggleContinent={onToggleContinent}
        isContinentSelected={isContinentSelected}
      />
      {!isSettingsOpen && <Puzzle selectedContinents={selectedContinents} />}
    </>
  );
};

export default App;
