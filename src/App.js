/* Imports de bases */
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Imports des components */
import Header from "./components/Header";
import Home from "./containers/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
