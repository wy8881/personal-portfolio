import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import {FerrisWheel} from "./components/FerrisWheel"
import {Skills} from "./components/Skills";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
    </div>
  );
}

export default App;
