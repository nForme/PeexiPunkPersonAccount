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
    image: "./CharacterContent/CharacterPhoto.png",
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
      experience: 48,
    },
    description:
      "It is a melee character that uses a sword and a shield freely, and it is easy to operate.",
    image: "./CharacterContent/CharacterPhoto.png",
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
          <h3 className="username">{character.name}</h3>
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
            <span className="class">{character.attributes.class}</span>
          </div>
        </div>
        <div className="character-stats">
          <div className="level-content-container">
            <div className="level-container">
              <p className="level-number">{character.stats.level}</p>
              <p className="level-text">Level</p>
            </div>
            <p className="experience">{character.stats.experience}%</p>
          </div>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${character.stats.experience}%` }}
            ></div>
          </div>
        </div>
        <div className="gear-score-container">
          <span className="title">Gear Score</span>
          <p className="score">{character.stats.gearScore}</p>
        </div>
        <div className="description-container">
          <p className="description-title">Information</p>
          <p className="description">{character.description}</p>
        </div>
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
