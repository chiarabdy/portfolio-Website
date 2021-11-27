import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Projects from './components/projects/Projects'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu'
import './app.scss'
import { useState } from 'react'

function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="app">
      <Topbar open ={open} setOpen={setOpen}/>
      <Menu open ={open} setOpen={setOpen}/> 
        <div className="sections">
          <Intro/>
          <Portfolio/>
          <Projects/>
          <Testimonials/>
          <Contact/> 
        </div>
    </div>
  );
}

export default App;
