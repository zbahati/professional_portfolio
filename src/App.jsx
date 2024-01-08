import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navibar"
import HeroSection from "./components/HeroSection"
import AboutMe from "./components/Aboutme"
import Skills from "./components/Skills"
function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <HeroSection />
        <AboutMe />
        <Skills />
      </BrowserRouter>
    </div>
  )
}

export default App
