import React, { useRef } from 'react'
import Heading from '../../Animations/Heading'
import { data } from './data'
import './animation.scss'
import { useInView } from 'framer-motion'
const Services = () => {
    const ref=useRef(null)
    const inViewH=useInView(ref)
    return (
        <section id="services">
            <section className="services-area">
                <div className="custom-container">
                    <div className="services-content content-width">
                        <Heading
                            heading={'Services'}
                            subHeading1={"My"}
                            subHeading2={'Specializations'}
                            iconClass={"las la-stream"}
                        />
                        <div className="services-items" ref={ref}>
                        {data.map((item)=>(
                            <div className={`service-item ${inViewH?item.animation:''}`}>
                                <i className={item.icon}/>
                                <h2>{item.heading}</h2>
                                <p>{item.des}</p>
                                <span className="projects">{item.proj}</span>
                            </div>
                        ))}           
                        </div>
                    </div>
                </div>
            </section>
        </section>

    )
}

export default Services