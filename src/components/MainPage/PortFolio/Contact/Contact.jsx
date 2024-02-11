import React from 'react'
import Heading from '../../../Animations/Heading'
import Email from '../../../Email/Email'

const Contact = () => {
    return (
        <section id="contact" className="scroll-to-page">
            <section className="contact-area">
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

export default Contact