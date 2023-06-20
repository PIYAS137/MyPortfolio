import React from 'react'

import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from '../../pages/Home'
import Error from '../../pages/Error'
import Books from '../../pages/Books/Books'
import Contact from '../../pages/Contact'

import Navbar from './Navbar'
import Projects from '../../pages/Projects'
import Resume from '../../pages/Resume'
import ProjectSubPage from '../../pages/ProjectSubPage'
import HCodes from '../../pages/HelpCode/HCodes'
import BookSubPage from '../../pages/Books/Images/BookSubPage'

const Layout = () => {
  return (
    <>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='*' element={<Error/>}/>
                <Route path='/skills' element={<Resume/>}/>
                <Route path='/books' element={<Books/>}/>
                <Route path='/books/:data' element={<BookSubPage/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/helpcode' element={<HCodes/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/projects/:data' element={<ProjectSubPage/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Layout