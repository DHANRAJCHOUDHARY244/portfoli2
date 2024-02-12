import React, { useRef } from 'react'
import { data } from './data'
import Counter from './Counter'
import Heading from '../../Animations/Heading'
import { useInView } from 'framer-motion'
import LazyImage from '../../LazyImage/LazyImage'
const Skill = () => {
    const refHeader = useRef(null)
    const inViewH = useInView(refHeader);
    return (
        <section id="skills" className="scroll-to-page">

            <section className="skills-area">
                <div className="custom-container">
                    <div className="skills-content content-width">
                        <Heading
                            heading={'my skills'}
                            subHeading1={"My"}
                            subHeading2={'Advantages'}
                            iconClass={"las la-shapes"}
                        />
                        <div className="row skills text-center" ref={refHeader}>
                            {data.map(item => (
                                <div className={`col-md-3 ${inViewH?item.animation:''}`} key={item.id}>
                                    <div className="skill">
                                        <div className="skill-inner">
                                            <LazyImage
                                                 src={item.img} alt={item.name} style={item.style}
                                            />
                                            <Counter
                                                value={item.per}
                                                duration={5}
                                            />
                                        </div>
                                        <p className="name">{item.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </section>

    )
}

export default Skill