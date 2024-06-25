import { useState } from 'react'
import Sidenavbar from './components/Sidenavbar'
import Main from './components/Main'
import Education from './components/Education'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {

  return (
      <div>
        <Sidenavbar/>
        <Main/>
        <Education/>
        <Project/>
        <Contact/>
      </div>
  )
}

export default App
