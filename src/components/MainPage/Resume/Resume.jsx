import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import { data } from './data'
import './Animation.css'
import Heading from '../../Animations/Heading'
const Resume = () => {
    const ref = useRef(null)
    const inView = useInView(ref);

    return (
        <section id="resume" >
            <section className="resume-area">
                <div className="custom-container">
                    <div className="resume-content content-width">
                    <Heading
                        heading={'resume'}
                        subHeading1={' Education &'}
                        subHeading2={'Experience'}
                        iconClass={"las la-briefcase"}
                    />
                        <div className="resume-timeline" ref={ref}>
                            {data.map(item => (
                                <motion.div className={`
                                item ${inView ? 'timelineRight' : ''}
                                `}
                                    key={item.id}>
                                    <span className="date">{item.year}</span>
                                    {item.item.map(subItem => (
                                        <>
                                            <h2 key={subItem.id}>{subItem.heading}</h2>
                                            <p key={subItem.id}>{subItem.subHeading}</p>
                                        </>
                                    ))}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </section>

    )
}

export default Resume