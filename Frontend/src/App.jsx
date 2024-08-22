import React from 'react'
import Home from './home/home'
// import Course from './components/Course'
import { Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './components/Signup'

function App() {
  return (<>

    <div className='dark:bg-gray-950 dark:text-white'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </div>
  </>    
  )
}

export default App
