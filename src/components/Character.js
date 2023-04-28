import React, { useState } from "react";
import CharacterInfo from "./CharacterInfo";
import styled from "styled-components";

const StyledCharacter = styled.div`
  width: 90%;
  justify-content: center;
  color: darkgreen;

  li {
    width: 100%;
    display: flex;
    outline: 5px solid green;
    flex-wrap: nowrap;
    justify-content: space-between;
    border: 1px black;
    margin-top: 20px;
    padding: 5px;
  }

  button {
    width: 7%;
    color: purple;
    background-color: darkgrey;
  }
  .main-li {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
  }
  .first {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
`;

export default function Character({ charData }) {
  const [charInfo, setCharInfo] = useState(false);
  function handleClick() {
    setCharInfo(!charInfo);
  }
  return (
    <StyledCharacter className="character">
      <li>
        <div className="main-li">
          <div className="first">
            <h2> {charData.name}</h2>
            <button onClick={handleClick}>{charData.birth_year}</button>
          </div>

          {charInfo && <CharacterInfo charData={charData} />}
        </div>
      </li>
    </StyledCharacter>
  );
}
