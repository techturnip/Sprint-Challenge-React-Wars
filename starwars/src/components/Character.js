import React from "react";

const Character = props => {
  return (
    <div className="card">
      <h2>{props.charData.name}</h2>
      <div className="charStats">
        <p>Height: {props.charData.height}cm</p>
        <p>Gender: {props.charData.gender}</p>
        <p>Birth Year: {props.charData.birth_year}</p>
      </div>
    </div>
  );
};

export default Character;
