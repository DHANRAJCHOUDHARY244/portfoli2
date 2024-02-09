import React from 'react'

const Resume = () => {
    return (
        <section id="resume" className="scroll-to-page">
                                <section className="resume-area">
                                    <div className="custom-container">
                                        <div className="resume-content content-width">
                                            <div className="section-header">
                                                <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                                    <i className="las la-briefcase" /> resume
                                                </h4>
                                                <h1 className="scroll-animation" data-animation="fade_from_bottom">
                                                    Education &amp;
                                                    <span>Experience</span>
                                                </h1>
                                            </div>
                                            <div className="resume-timeline">
                                                <div className="item scroll-animation" data-animation="fade_from_right">
                                                    <span className="date">2023 - Present</span>
                                                    <h2>Framer Desinger &amp; Developer</h2>
                                                    <p>Freelance</p>
                                                    <h2>Front-End WordPress Developer</h2>
                                                    <p>Innovator TechLine</p>
                                                </div>
                                                <div className="item scroll-animation" data-animation="fade_from_right">
                                                    <span className="date">2022 - 2023</span>
                                                    <h2>Webflow Developer</h2>
                                                    <p>Freelance</p>
                                                </div>
                                                <div className="item scroll-animation" data-animation="fade_from_right"> <span className="date">2021 - 2022</span>
                                                    <h2>Web Designer</h2>
                                                    <p>Freelance</p>
                                                    <h2>MERN Stack</h2>
                                                    <p>Freelance</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
        </section>

    )
}

export default Resume