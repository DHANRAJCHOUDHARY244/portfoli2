import React from 'react'
import { data } from './data'
import Counter from './Counter'
const Skill = () => {
    return (
        <section id="skills" className="scroll-to-page">
            
                                <section className="skills-area">
                                    <div className="custom-container">
                                        <div className="skills-content content-width">
                                            <div className="section-header">
                                                <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                                    <i className="las la-shapes" /> my skills
                                                </h4>
                                                <h1 className="scroll-animation" data-animation="fade_from_bottom">My
                                                    <span>Advantages</span>
                                                </h1>
                                            </div>
                                            <div className="row skills text-center">
                                                {data.map(item=>(
                                                <div className="col-md-3 scroll-animation" key={item.id}>
                                                    <div className="skill">
                                                        <div className="skill-inner">
                                                            <img decoding="async" src={item.img} alt={item.name} style={item.style} />
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