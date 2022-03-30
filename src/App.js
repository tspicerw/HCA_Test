import "./App.css";
import CovidList from "./components/VideoList/CovidList";
import AllVideoList from "./components/VideoList/AllVideoList";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<CovidList />} />
          <Route path="/allvideos" element={<AllVideoList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
