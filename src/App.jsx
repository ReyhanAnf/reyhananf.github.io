import { useEffect, useRef, useState } from 'react'
import Header from './Components/header'
import Highlight from './Components/highlight'
import Navbar from './Components/navbar'
import Typoprofil from './Components//typoprofil'
import Skillsparam from './Components/skillsparam'
import Project from './Components/project'
import Kidding from './Components/kidding'
import About from './Components/about'
import Footer from './Components/footer'
import { useInView } from 'react-intersection-observer'

function App() {
  const { ref: myRef, inView: stepEl} = useInView();
  const { ref: proRef, inView: stepPro} = useInView();
  const { ref: kidRef, inView: stepKid} = useInView();
  const { ref: skillRef, inView: stepSkill} = useInView();
  const { ref: aboutRef, inView: stepAbout} = useInView();
  
  return (
    <div className="App px-4">
      <Header />
      <Typoprofil />
      <Highlight />
      <Navbar />
      <Skillsparam refApp={skillRef} step={stepSkill} />
      <Project refApp={proRef} step={stepPro}/>
      <Kidding refApp={kidRef} step={stepKid} />
      <About refApp={aboutRef} step={stepAbout}/>
      <Footer />
    </div>
  )
}

export default App
