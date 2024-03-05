import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import {Skills} from "./components/Skills";
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        document.title = "Portfolio"
    }, [])

  return (
    <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact/>
    </div>
  );
}

export default App;
