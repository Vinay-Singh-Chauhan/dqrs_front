import Footer from './components/footer/Footer.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import './App.css'
import { Outlet } from "react-router-dom";
function App() {
  
  return (
    <>
      <Navbar />
    <div className="container">
<Outlet/>
    </div>
    <Footer />
    </>
  )
}

export default App
