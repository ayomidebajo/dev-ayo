import { Routes, useParams } from "react-router-dom";
import Home from "./Components/home";
import logo from "./logo.svg";
import "./styles/style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
