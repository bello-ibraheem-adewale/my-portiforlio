import About from "./page/About"
import Home from "./page/Home"
import Service from "./page/Service"
import { BrowserRouter,Routes,Route } from "react-router-dom"


function App() {
  

  return (
    <BrowserRouter>
    <div>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
