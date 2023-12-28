import { Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Professional from "./pages/Professional"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/professional" element={<Professional />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/contact" element={<Contact />}/>
      </Route>
    </Routes>
  )
}

export default App
