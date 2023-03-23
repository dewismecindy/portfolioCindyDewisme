/* Imports de bases */
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Imports des components */
import Header from "./containers/Header";
import Home from "./containers/Home";
import Presentation from "./components/Presentation";
import About from "./components/About";
import Competences from "./components/Competences";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/about" element={<About />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
