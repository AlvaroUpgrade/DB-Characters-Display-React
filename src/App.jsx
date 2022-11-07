import { Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import CharacterDetails from "./pages/CharacterDetails";
import Characters from "./pages/Characters";
import Home from "./pages/Home";
import More from "./pages/More";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to=""><p>Home</p></Link>

        <Link to="characters"><p>Characters</p></Link>

        <Link to="more"><p>Home</p></Link>
      </nav>
      <main>
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/characters" element={<Characters />}></Route>
          <Route
            path="/characters/:name"
            element={<CharacterDetails />}
          ></Route>
          <Route path="/more" element={<More />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
