import React from 'react'
import PortfolioArea from './PortArea/PortfolioArea'
import Testmonials from './Testimonial/Testmonials'
import Pricing from './Pricing/Pricing'
import Contact from './Contact/Contact'

const PortFolio = () => {
  return (
    <section id="portfolio" class="scroll-to-page">
      <div>
        <div>
          <div>
            <div>
              <div>
              <PortfolioArea/>
              <Testmonials/>
              <Pricing/>
              <Contact/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortFolio