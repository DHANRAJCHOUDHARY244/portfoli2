import React from 'react'
import Heading from '../Animations/Heading'
import Email from '../Email/Email';

const ContactPopup = () => {
    const close=()=>{
        document.getElementById("HIRE").style.display = "none";
        document.getElementById("PAGE").style.display = "block";
    }
    return (
        <section className="services-area" id="HIRE" style={{ display: 'none' }}>
            <div className="custom-container">
                <div className="services-content content-width"  onClick={close}
                        style={{cursor:'pointer'}}>
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
                            <i onClick={close} style={{ cursor: 'pointer' }}><span style={{ fontSize: 15 }} className="la la-home">Go
                                To
                                Home Page</span></i>
                        </div>
                    </div>
                </div>
            </div>
            <section className="contact-area mt-5">
                <div className="custom-container">
                    <div className="contact-content content-width">
                        <Heading
                            heading={'contact'}
                            subHeading1={"Let's Work"}
                            subHeading2={'Together!'}
                            iconClass={"las la-envelope"}
                        />
                        <h3 className="scroll-animation" data-animation="fade_from_bottom">
                            choudharydhanraj239@gmail.com
                        </h3>
                        <p id="required-msg">* Marked fields
                            are required to fill.
                        </p>
                        <div className="wpcf7 no-js" id="wpcf7-f172-p8-o1" lang="en-US" dir="ltr">
                            <div className="screen-reader-response">
                                <p role="status" aria-live="polite" aria-atomic="true" />
                                <ul />
                            </div>
                            <Email/>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default ContactPopup