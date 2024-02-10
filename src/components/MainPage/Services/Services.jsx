import React from 'react'
import Heading from '../../Animations/Heading'
import { data } from './data'

const Services = () => {
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
                        <div className="services-items">
                        {data.map((item)=>(
                            <div className="service-item">
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