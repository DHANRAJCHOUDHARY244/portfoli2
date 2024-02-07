import React from 'react'
import Home from './Home/Home'
import About from './About/About'
import Resume from './Resume/Resume'
import Services from './Services/Services'
import Skill from './Skills/Skill'
import PortFolio from './PortFolio'

const index = () => {
  return (
    <div id='PAGE'>
        <Home/>
        <About/>
        <Resume/>
        <Services/>
        <Skill/>
        <PortFolio/>
    </div>
  )
}

export default index