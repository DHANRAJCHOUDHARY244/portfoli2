import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Email = () => {
    const form = useRef();
    const [messageVisible, setMessageVisible] = useState(false);
    const [error, setError] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_clgk3ub",
                "template_6hz1hyt",
                form.current,
                {
                    publicKey: 'Gq2Lu2fEVTHmYLQyM',
                }
            )
            .then(
                (result) => {
                    setMessageVisible(true);
                    setError('')
                    form.current.reset();
                    setTimeout(()=>{
                        setMessageVisible(false)
                    },3000)
                },
                (error) => {
                    setMessageVisible(false);
                    setError(error.text)
                    setTimeout(()=>{
                    setError('')
                    },3000)
                }
            );
    };


    return (
        <>
            <form className="wpcf7-form init" encType="multipart/form-data" ref={form} onSubmit={sendEmail}>
                <div className={`${messageVisible?'alert-success':error!==''?'alert':''} messenger-box-contact__msg`} style={{ display: messageVisible ? 'block' : 'none' }}>
                    {messageVisible && <p>Your message was sent successfully.</p>}
                    {error!=='' && <p>{error}</p>}
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="input-group">
                            <p><label htmlFor="full-name">full
                                Name
                                <sup>*</sup></label>
                                <span className="wpcf7-form-control-wrap" >
                                    <input size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required input-group"
                                        required
                                        placeholder="Your Full Name" type="text" name="full-name" /></span>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <p><label htmlFor="email">Email
                                <sup>*</sup></label><span className="wpcf7-form-control-wrap" data-name="email">
                                    <input id="email" size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email input-group"
                                        required
                                        placeholder="Your email adress" defaultValue type="email" name="email" /></span>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <p>
                                <label htmlFor="phone-number">phone
                                    <span>(optional)</span></label><span className="wpcf7-form-control-wrap" data-name="phone">
                                    <input id="phone" className="wpcf7-form-control wpcf7-number wpcf7-validates-as-number input-group"
                                        placeholder="Your number phone" type="tel" name="phone" /></span>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <p><label htmlFor="subject">subject
                                <sup>*</sup></label><span className="wpcf7-form-control-wrap" data-name="subject">
                                    <select className="wpcf7-form-control wpcf7-select input-group"
                                        id="subject" aria-invalid="false" name="subject">
                                        <option value=" For Website ReDesign"> For Website ReDesign
                                        </option>
                                        <option value="Want To Create From Scratch">
                                            Want To Create From Scratch
                                        </option>
                                        <option value="Other">
                                            Other
                                        </option>
                                    </select></span>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="input-group">
                            <p><label htmlFor="budget">your
                                budget
                                <span>(optional)</span></label><span className="wpcf7-form-control-wrap" data-name="budget">
                                    <input className="wpcf7-form-control wpcf7-number wpcf7-validates-as-number input-group"
                                        id="budget" aria-invalid="false" placeholder="A range budget for your project" defaultValue type="number" name="budget" /></span>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="input-group">
                            <p><label htmlFor="message">message</label><span className="wpcf7-form-control-wrap" data-name="message">
                                <textarea cols={40} rows={2} className="wpcf7-form-control wpcf7-textarea input-group"
                                    id="message" aria-invalid="false" placeholder="Wrire your message here ..." name="message" defaultValue={""} /></span>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="input-group submit-btn-wrap">
                            <p><button className="theme-btn" type="submit" value="Send">send message</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="wpcf7-response-output" aria-hidden="true">
                </div>
            </form>
        </>
    );
};

export default Email;
