import React from "react";
import "../scss/CharacterContent.scss";
import PenSvg from "../ui-kit/PenSvg";
import HumanSvg from "../ui-kit/HumanSvg";
import BattleMageSvg from "../ui-kit/BattleMageSvg";

const characters = [
  {
    name: "NeBrasko21",
    attributes: {
      race: "Human",
      class: "Battle Mage",
    },
    stats: {
      level: 20,
      gearScore: 1948,
      experience: 99,
    },
    description:
      "It is a melee character that uses a sword and a shield freely, and it is easy to operate.",
    image: "/CharacterContent/CharacterPhoto.png",
  },
  {
    name: "NeBrasko21",
    icon: "🖊️",
    attributes: {
      race: "Human",
      class: "Battle Mage",
    },
    stats: {
      level: 20,
      gearScore: 1948,
      experience: 99,
    },
    description:
      "It is a melee character that uses a sword and a shield freely, and it is easy to operate.",
    image: "/CharacterContent/CharacterPhoto.png",
  },
];

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <div className="character-image">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="character-info">
        <div className="character-username">
          <h3>{character.name}</h3>
          <PenSvg />
        </div>

        <div className="character-attributes">
          <div className="character-race">
            <div className="human-svg-container">
              <HumanSvg />
            </div>
            <span className="race">{character.attributes.race}</span>
          </div>
          <div className="character-class">
            <div className="bm-svg-container">
              <BattleMageSvg />
            </div>
            <span>{character.attributes.class}</span>
          </div>
        </div>
        <div className="character-stats">
          <p>
            <strong>{character.stats.level}</strong> Level
          </p>
          <p>Gear Score: {character.stats.gearScore}</p>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${character.stats.experience}%` }}
            ></div>
          </div>
        </div>
        <p className="description">{character.description}</p>
      </div>
    </div>
  );
};

const CharacterContent: React.FC = () => {
  return (
    <section className="characters-container">
      {characters.map((character, index) => (
        <CharacterCard key={index} character={character} />
      ))}
    </section>
  );
};

export default CharacterContent;
