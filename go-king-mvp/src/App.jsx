// import { useState } from 'react'
import { Route, Routes } from 'react-router-DOM'
import './App.css'

import CreateCourse from './views/admin/CreateCourse'
import ListCourse from './views/admin/ListCourse'

function App() {

  return (
    <Routes>
      <Route>
        <Route path="/list-course" element={<ListCourse/>}/>
        <Route path="/create-course" element={<CreateCourse/>}/>
      </Route>
    </Routes>
  )
}

export default App
