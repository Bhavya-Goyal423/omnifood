import Featured from "./components/Featured Section/Featured.component";
import Hero from "./components/Hero/Hero.component";
import How from "./components/How Section/How.component";
import Meals from "./components/Meals Section/Meals.component";
import Navbar from "./components/Navbar/Navbar.component";
import Pricing from "./components/Pricing Section/Pricing.component";
import Testimonial from "./components/Testimonial Section/Testimonial.component";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <How />
        <Meals />
        <Testimonial />
        <Pricing />
      </main>
    </>
  );
}

export default App;
