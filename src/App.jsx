import "./App.css";
import Buttons from "./components/Buttons";
import Particles from "./components/Particles";
import Titles from "./components/Titles";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Particles />
      <Titles />
      <Buttons />
      <Footer />
    </div>
  );
}

export default App;
