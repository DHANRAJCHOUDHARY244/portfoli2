import React from 'react'

const Services = () => {
    return (
        <section id="services" className="scroll-to-page">
                                <section className="services-area">
                                    <div className="custom-container">
                                        <div className="services-content content-width">
                                            <div className="section-header">
                                                <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                                    <i className="las la-stream" /> Services
                                                </h4>
                                                <h1 className="scroll-animation" data-animation="fade_from_bottom">My
                                                    <span>Specializations</span>
                                                </h1>
                                            </div>
                                            <div className="services-items">
                                                <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                                                    <i className="las la-bezier-curve" />
                                                    <h2>Website Design</h2>
                                                    <p>I created digital products with unique ideas use
                                                        Figma ,WordPress, WebFlow &amp; Framer</p>
                                                    <span className="projects">20 Projects</span>
                                                </div>
                                                <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                                                    <i className="las la-code" />
                                                    <h2>Development</h2>
                                                    <p>I build website go live with MERN Stack,Framer,
                                                        Webflow or
                                                        WordPress</p>
                                                    <span className="projects">30+ Projects</span>
                                                </div>
                                                <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                                                    <i className="las la-rocket" />
                                                    <h2>SEO/Marketing</h2>
                                                    <p>Increase the traffic for your website with SEO
                                                        optimized</p>
                                                    <span className="projects">2 Projects</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
        </section>

    )
}

export default Services