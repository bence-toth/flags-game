import { continents } from "./countries";

import "./Settings.css";

const Settings = ({
  isSettingsOpen,
  onToggleSettings,
  onToggleContinent,
  isContinentSelected,
}: {
  isSettingsOpen: boolean;
  onToggleSettings: () => void;
  onToggleContinent: (continent: string) => void;
  isContinentSelected: (continent: string) => boolean;
}) => (
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
  </>
);

export default Settings;
