import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GuestList from './components/GuestList'
import GuestForm from './components/GuestForm'
import Menu from './components/Navbar'
import {Container} from '@mui/material'

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Menu/>
        <Routes>
          <Route path='/' element={<GuestList/>}/>
          <Route path='/guest/add' element={<GuestForm/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}
