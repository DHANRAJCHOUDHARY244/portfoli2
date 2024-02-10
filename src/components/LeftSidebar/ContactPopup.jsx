import React from 'react'
import Heading from '../Animations/Heading'

const ContactPopup = () => {
    return (
        <div>
            <section id="HIRE" style={{ display: 'none' }}>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <section className="services-area">
                                        <div className="custom-container">
                                            <div className="services-content content-width">
                                                <Heading
                        heading={'Contact Information'}
                        subHeading1={'Connect with'}
                        subHeading2={'DHANRAJ CHOUDHARY'}
                        iconClass={"las la-envelope"}
                    />
                                                <div className="services-items">
                                                    <style dangerouslySetInnerHTML={{ __html: "\n                                                                .services-items .service-item .a {\n                                                                    left: 0px;\n                                                                    margin: 10px;\n                                                                    position: unset;\n                                                                    display: inline;\n                                                                }\n\n                                                                .services-items .service-item span {\n                                                                    margin-top: -10px;\n                                                                    display: block;\n                                                                }\n\n                                                                .services-items .service-item li {\n                                                                    margin-left: 20px;\n                                                                }\n\n                                                                .services-items .service-item {\n                                                                    align-items: center;\n                                                                }\n                                                            " }} />
                                                    <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                                                        <h2><i className="las la-envelope a" />E-mail</h2>
                                                        <span className="projects">choudharydhanraj239@gmail.com</span>
                                                        <h2><i className="las la-phone a" />Phone No.
                                                        </h2>
                                                        <span className="projects">9116459382</span>
                                                        <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
                                                            <li>
                                                                <a href="https://www.instagram.com/dhanrajchoudhary507/"><i className="lab la-instagram a" /><span>InstaGram</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="https://www.linkedin.com/in/dhanraj-choudhary-550892286/"><i className="lab la-linkedin a" /><span>LinkedIn</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="https://www.facebook.com/dhanraj.chaudhari.75873"><i className="lab la-facebook a" /><span>FaceBook</span></a>
                                                            </li>
                                                            <li>
                                                                <a href="https://github.com/DHANRAJCHOUDHARY244"><i className="lab la-github a" /><span>GitHub</span></a>
                                                            </li>
                                                        </ul>
                                                        <i id="CLOSEHIRE" style={{ cursor: 'pointer' }}><span style={{ fontSize: 15 }} className="la la-home">Go
                                                            To
                                                            Home Page</span></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactPopup