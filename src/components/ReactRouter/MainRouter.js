import React from 'react'
import About from '../pages/About'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Serivces from '../pages/Serivces'
import { Link, Route, Routes } from 'react-router-dom'
export const MainRouter = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='about'>about</Link>
            </li>
            <li>
                <Link to='serivce'>serivce</Link>
            </li>
            <li>
                <Link to='contact'>contact</Link>
            </li>
        </ul>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='serivce' element={<Serivces/>}/>
            <Route path='contact' element={<Contact/>}/>
        </Routes>
    </div>
  )
}
export default MainRouter
