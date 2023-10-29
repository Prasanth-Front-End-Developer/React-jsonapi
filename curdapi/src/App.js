import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Curd App/Home'
import Create from './Curd App/Create'
import Update from './Curd App/Update'
import Read from './Curd App/Read'
import Navbar from './Curd App/Navbar'
import Login from './Curd App/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/update/:id' element={<Update />}></Route>
          <Route path='/read/:id' element={<Read />}></Route>
          <Route path='/login' element={<Login />}></Route>

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
