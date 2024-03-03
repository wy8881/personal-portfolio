import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import {Skills} from "./components/Skills";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        document.title = "Portfolio"
    }, [])

  return (
    <div className="App">
        <NavBar />
        <div className="body-box">
            <Banner />
            <Skills />
        </div>

    </div>
  );
}

export default App;
