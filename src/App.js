import "./css/styles.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import JobCard from "./components/Cards/JobCard.jsx";
import Game from "./api/Game.js";
export default function App() {
  if (false) {
    //load save
  } else {
    let game = new Game(require("./data/default_game.json"));
  }
  return (
    <div className="App h-screen w-screen">
      <NavBar />
      <br />
      <br />
      <br />
      <JobCard icon="fa fa-tree" />
    </div>
  );
}
