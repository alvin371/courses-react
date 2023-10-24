// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-DOM'
import './App.css'

import CreateCourse from './views/admin/CreateCourse'
import ListCourse from './views/admin/ListCourse'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/list-course" element={<ListCourse/>}/>
        <Route path="/create-course" element={<CreateCourse/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
