import React from "react";

export default function CharacterInfo({ charData }) {
  //   console.log(charData);
  return (
    <div className="characters-info">
      <p>Height: {charData.height}</p>
      <p>Gender: {charData.gender}</p>
      <p>Mass: {charData.mass}</p>
      <p>Hair Color: {charData.hair_color}</p>
      <p>Skin Color: {charData.skin_color}</p>
      <p>Birth Year: {charData.birth_year}</p>
    </div>
  );
}
