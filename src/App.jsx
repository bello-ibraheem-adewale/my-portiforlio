import About from "./page/About"
import Home from "./page/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom"

function App() {
  

  return (
    <BrowserRouter>
    <div>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
