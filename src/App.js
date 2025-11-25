
import './App.css';
import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import {Skills} from "./components/Skills";
import {Projects} from "./components/Projects";
import {GitHubContributions} from "./components/GitHubContributions";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";
import {FerrisWheel} from "./components/FerrisWheel";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <GitHubContributions />
        <Contact/>
        <Footer/>
        <FerrisWheel />
        {/*<Cursor />*/}

    </div>
  );
}

export default App;
