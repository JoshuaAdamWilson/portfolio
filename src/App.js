import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Particles from "react-particles-js";
import AboutMe from "./components/AboutMe/AboutMe";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: {
                  value: [
                    "#7D8DF4",
                    "#B069FF",
                    "#9739FF",
                    "#35c43e",
                    "#27996f",
                  ],
                },
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
    </>
  );
}

export default App;
