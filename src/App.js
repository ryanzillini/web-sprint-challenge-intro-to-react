import React, { useState, useEffect } from "react";
import Axios from "axios";
import Character from "./components/Character";
import CharacterInfo from "./components/CharacterInfo";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [charData, setcharData] = useState([]);

  useEffect(() => {
    Axios.get(`https://swapi.dev/api/people/`)
      .then((res) => setcharData(res.data))
      .catch((err) => console.error(err));
  }, []);

  // const charList = charData.map((id) => {
  //   return <h2>{id.name}</h2>;
  // });

  // console.log(charData);

  return (
    <div className="App">
      <h1 className="Header">React War</h1>
      <ul>
        {charData.map((char) => {
          return <Character charData={char} />;
        })}
      </ul>
    </div>
  );
};

export default App;
