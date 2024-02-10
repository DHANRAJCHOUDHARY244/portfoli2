import React from 'react'
import Heading from '../../Animations/Heading'
import TypingText from '../../Animations/TypingText'
const About = () => {
  return (
    <section id="about">
      <section className="about-area">
        <div className="custom-container">
          <div className="about-content content-width">
            <Heading
              heading={'About'}
              subHeading1={'Every great design begin with an even'}
              subHeading2={'better story'}
              iconClass={"lar la-user"}
            />
            <p className="scroll-animation" >
              <TypingText
                text={"Since beginning my journey as a freelance designer nearly 2 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time."} />
            </p>
          </div>
        </div>
      </section>

    </section>

  )
}

export default About