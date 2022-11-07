import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CharacterDetails.scss";

const CharacterDetails = () => {
  const { name } = useParams();
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const getCharacter = async () => {
      const res = await axios.get(
        `https://dragon-ball-super-api.herokuapp.com/api/characters/${name}`
      );
      console.log(res);
      setCharacter(res.data);
    };

    getCharacter();
  }, []);
  return (
    <div className="characterBox">
      <div className="detailsCard">
        <div>
          <p>Nombre: {character.name}</p>
          <p>Especie: {character.specie}</p>
          <p>Role: {character.role}</p>
          <p>Universo: {character.universe}</p>
        </div>
        <img src={character.imageUrl} alt="Imagen de personaje"></img>
      </div>
    </div>
  );
};

export default CharacterDetails;
