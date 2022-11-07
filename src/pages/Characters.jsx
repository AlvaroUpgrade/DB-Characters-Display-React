import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Characters.scss";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const res = await axios.get(
        "https://dragon-ball-super-api.herokuapp.com/api/characters"
      );
      console.log(res.data);
      setCharacters(res.data);
    };
    getCharacters();
  }, []);
  return (
    <div className="container">
      {characters &&
        characters.map((character) => {
          return (
            <div key={character.name} className="charactersCard">
              <p>{character.name}</p>
              <img src={character.imageUrl} alt="Imagen de personaje"></img>
            </div>
          );
        })}
    </div>
  );
};

export default Characters;
