import React, { useState } from "react";
import CharacterInfo from "./CharacterInfo";

export default function Character({ charData }) {
  const [charInfo, setCharInfo] = useState(false);
  function handleClick() {
    setCharInfo(!charInfo);
  }
  return (
    <li>
      <h2> {charData.name}</h2>
      <button onClick={handleClick}>{charData.birth_year}</button>
      {charInfo && <CharacterInfo charData={charData} />}
    </li>
  );
}
