import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Forgot from './components/Forgot'
import Home from './components/Home'
import Donor from './components/Donor'
import Recipient from './components/Recipient'
import About from './components/About'
import Contact from './components/Contact'
import DonorPage from './components/DonorPage'
import DonorList from './components/DonorList'
import Footer from './components/Footer'
import NgoList from './components/NgoList'
import Toast from './components/Toast'

export const App = () => {

  return (
    <div>

      {/* <Toast /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route exact path="/" element = {<Navbar/>}></Route> */}
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/password-recovery" element={<Forgot />}></Route>

          <Route exact path="/food-donation" element={<Donor />}></Route>
          <Route exact path="/access-food" element={<Recipient />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/donor-page/:id" element={<DonorPage />}></Route>
          <Route exact path='/donor-list' element={<DonorList />}></Route>
          <Route exact path="/ngo-organization" element={<NgoList />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <Footer/> */}
    </div>
  )
}

export default App