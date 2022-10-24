import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header'
import Home from './pages/home'
import AboutSection from './pages/about'
import Skills from './pages/skills'
import Projects from './pages/projects/'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Home />
      <AboutSection />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
