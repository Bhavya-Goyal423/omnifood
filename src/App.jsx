import "./App.css";
import Hero from "./components/Hero/Hero.component";
import How from "./components/How Section/How.component";
import Navbar from "./components/Navbar/Navbar.component";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <How />
      </main>
    </>
  );
}

export default App;
