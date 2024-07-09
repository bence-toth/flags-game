import countries, { continents } from "./countries";

import "./App.css";

// TODO: Make this configurable
const filteredCountries = countries.filter(
  (country) => country.continent === continents.asia
);

const randomCountryIndex = Math.floor(Math.random() * filteredCountries.length);

const randomCountry = {
  ...filteredCountries[randomCountryIndex],
  funFact:
    filteredCountries[randomCountryIndex].funFacts[
      Math.floor(
        Math.random() * filteredCountries[randomCountryIndex].funFacts.length
      )
    ],
};

const otherChoices = filteredCountries
  .filter((country) => country.name !== randomCountry.name)
  .sort(() => Math.random() - 0.5)
  .slice(0, 5);

const choices = [randomCountry, ...otherChoices].sort(
  () => Math.random() - 0.5
);

const App = () => (
  <main>
    <div className="map">
      <iframe
        title={randomCountry.name}
        src={`https://www.google.com/maps/embed?pb=${randomCountry.embedUrl}`}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    <div className="content">
      <div className="header">
        <h2>{randomCountry.name}</h2>
        <p>{randomCountry.funFact}</p>
      </div>
      <div className="flag-selection-wrapper">
        <div className="flag-selection">
          {choices.map((choice) => (
            <div>
              <button key={choice.name}>{choice.flag}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </main>
);

export default App;
