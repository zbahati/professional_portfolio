import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navibar"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
