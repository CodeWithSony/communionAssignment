import logo from "./logo.svg";
import "./App.css";
import Alroutes from "./Alroutes";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Alroutes />
    </Router>
  );
}

export default App;
