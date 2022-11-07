import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
 const navigate = useNavigate();
    return (
    <button onClick={() => {navigate("characters")}}>Boton para ver los Characters</button>
  )
}

export default Home