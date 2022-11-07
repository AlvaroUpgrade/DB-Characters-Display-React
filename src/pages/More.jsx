import React from "react";
import { useNavigate } from "react-router-dom";

const More = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/characters");
      }}
    >
      Boton para ver los Characters
    </button>
  );
};

export default More;
