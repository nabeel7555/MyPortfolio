// App.js
import Aboutus from "./Components/Aboutme";
import Education from "./Components/Education";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import BouncingArrow from "./Components/Bouncingarrow"; // Ensure correct casing in the import

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Aboutus />
        <Skills />
        <Education />
        <Contact />
        <BouncingArrow />
      </div>
    </>
  );
}

export default App;
