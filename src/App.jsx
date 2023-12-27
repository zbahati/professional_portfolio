import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navibar"
import HeroSection from "./components/HeroSection"
import AboutMe from "./components/Aboutme"
function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <HeroSection />
        <AboutMe />
      </BrowserRouter>
    </div>
  )
}

export default App
