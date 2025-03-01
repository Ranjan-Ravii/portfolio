// import { useState } from 'react'
// import './App.css'
// import Navbar from './Components/Header/Navbar'
// import Home from './Components/Home/Home'
// import About from './Components/About/About'
// import ProjectCarousel from './Components/ProjectCarousel/ProjectCarousel'
// import Blogs from './Components/Blogs/Blogs.jsx'
// import Contacts from './Components/Contects/Contects.jsx'
// import Footer from './Components/Footer/Footer.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import AppRoutes from './Components/Routing/AppRoutes.jsx'




// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
 
//         <div className="w-screen min-h-screen bg-[#1E3A5A] overflow-x-hidden">
//           <Navbar />
//           <section id="home"><Home /></section>
//           <section id="about" className="pt-28"><About /></section>
//           <section id="projects"><ProjectCarousel /></section>
//           <section id="blogs"><Blogs /></section>
//           <section id="contact"><Contacts /></section>
//           <Footer />
//         </div>
//         <AppRoutes/>
     

//     </>
//   )
// }

// export default App


import { useState } from 'react'
import './App.css'
import Navbar from './Components/Header/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import ProjectCarousel from './Components/ProjectCarousel/ProjectCarousel'
import Blogs from './Components/Blogs/Blogs.jsx'
import Contacts from './Components/Contects/Contects.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { useNavigate } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  return (
    <>
      <div className="w-screen min-h-screen bg-[#1E3A5A] overflow-x-hidden">
        <Navbar />
        <section id="home"><Home /></section>
        <section id="about" className="pt-28"><About /></section>
        <section id="projects"><ProjectCarousel /></section>
        <section id="blogs"><Blogs /></section>
        <section id="contact"><Contacts /></section>
        <Footer />
      </div>
    </>
  )
}

export default App