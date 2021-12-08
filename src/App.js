import "./App.css";
import AbuteMe from "./PortoFolieContainer/AbuteMe/AbuteMe";
import ContactMe from "./PortoFolieContainer/ContactMe/ContactMe";
import Home from "./PortoFolieContainer/Home/Home";
import Resume from "./PortoFolieContainer/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Home />
      <AbuteMe />
      <Resume />
      <ContactMe />
    </div>
  );
}

export default App;
