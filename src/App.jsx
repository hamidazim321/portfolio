import { Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Professional from "./pages/Professional"
import ServiceFrontEnd from "./pages/ServiceFrontEnd"
import ServicePortfolio from "./pages/ServicePortfolio"
import ServiceMaintenance from "./pages/ServiceMaintenance"
import Certificates from "./pages/certificates"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/about/professional" element={<Professional />}/>
        <Route path="/about/portfolio" element={<Portfolio />}/>
        <Route path="/about/certificates" element={<Certificates />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="services/front-end" element={<ServiceFrontEnd />} />
        <Route path="services/personal-project" element={<ServicePortfolio />} />
        <Route path="services/site-maintenance" element={<ServiceMaintenance />} />
      </Route>
    </Routes>
  )
}

export default App
