import React from "react";
import Character from "./Character";
import "./StarWars.css";

const CharacterList = props => {
  return (
    <div className="card-container">
      {props.charList.map(char => {
        return <Character charData={char} />;
      })}
    </div>
  );
};

export default CharacterList;
