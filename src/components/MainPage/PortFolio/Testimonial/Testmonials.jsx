import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react'

const Testmonials = () => {
    const divRef = useRef(null);


    return (
        <section id="testimonial" className="scroll-to-page">
            <section className="testimonial-area">
                <div className="custom-container">
                    <div className="testimonial-content content-width">
                        <div className="section-header">
                            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                <i className="lar la-comment" />
                                testimonial
                            </h4>
                            <h1 className="scroll-animation" data-animation="fade_from_bottom">
                                Trusted by
                                <span>Hundred
                                    Clients</span>
                            </h1>
                        </div>
                        <div className="testimonial-slider-wrap scroll-animation" ref={divRef}>
                            <div className="owl-carousel testimonial-slider owl-theme">
                                <div className="testimonial-item">
                                    <div className="testimonial-item-inner">
                                        <div className="author d-flex align-items-center">
                                            <img decoding="async" src="/img/testimonial-1.jpg" alt="portfolio" />
                                            <div className="right">
                                                <h3>Subhash
                                                    Halder
                                                </h3>
                                                <p className="designation">
                                                    Secretary
                                                    <span>ICCILLSR</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p>“Dhanraj - A
                                            Developer with
                                            the
                                            creativity,
                                            professional and
                                            master of code.
                                            Much more than
                                            what
                                            i'm expect.
                                            High quality
                                            product &amp;
                                            flexiable
                                            price.
                                            Recommended!.”
                                        </p>
                                        <a href="https://iccillsr.in/" className="project-btn">Project</a>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="testimonial-item-inner">
                                        <div className="author d-flex align-items-center">
                                            <img decoding="async" src="/img/testimonial-2.jpg" alt="portfolio" />
                                            <div className="right">
                                                <h3>Christina
                                                    Morillo
                                                </h3>
                                                <p className="designation">
                                                    Product
                                                    Management
                                                    of
                                                    <span>Invision
                                                        App
                                                        Inc</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p>“Dhanraj was a
                                            real pleasure to
                                            work with
                                            and we look
                                            forward to
                                            working with him
                                            again.
                                            He's
                                            definitely the
                                            kind of
                                            designer that
                                            you can trust
                                            with any
                                            project from
                                            A-Z.”</p>
                                        <a href="#" className="project-btn">Project</a>
                                    </div>
                                </div>
                                <div className="testimonial-item">
                                    <div className="testimonial-item-inner">
                                        <div className="author d-flex align-items-center">
                                            <img decoding="async" src="/img/testimonial-3.jpg" alt="portfolio" />
                                            <div className="right">
                                                <h3>Phil
                                                    Foden
                                                </h3>
                                                <p className="designation">
                                                    Director
                                                    of
                                                    <span>Envato
                                                        LLC</span>
                                                </p>
                                            </div>
                                        </div>
                                        <p>“Extremely
                                            profressional
                                            and fast
                                            service!.
                                            Dhanraj is a
                                            master
                                            of code and he
                                            also very
                                            creative. We
                                            done 3 projects
                                            with
                                            him and certain
                                            will continue.”
                                        </p>
                                        <a href="#" className="project-btn">Project</a>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-footer-nav">
                                <div className="testimonial-nav d-flex align-items-center">
                                    <button className="prev"><i className="las la-angle-left" /></button>
                                    <div id="testimonial-slide-count">
                                    </div>
                                    <button className="next"><i className="las la-angle-right" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="clients-logos">
                            <h4 className="scroll-animation" data-animation="fade_from_bottom">
                                work
                                with 15+
                                brands in INDIA </h4>
                            <div className="row align-items-center">
                                <style dangerouslySetInnerHTML={{ __html: "\n                                                                                            .CI {\n                                                                                                width: 180px;\n                                                                                                height: 70px;\n                                                                                                object-fit: contain;\n                                                                                            }\n                                                                                        " }} />
                                <div className="col-md-4 scroll-animation" data-animation="fade_from_left">
                                    <a href="https://www.tanlerida.com/"><img decoding="async" className="CI" src="/img/client-1.png" /></a>
                                </div>
                                <div className="col-md-4 scroll-animation" data-animation="fade_from_bottom">
                                    <a href="https://www.ambergroupindia.com/"><img decoding="async" className="CI" src="/img/client-2.png" /></a>
                                </div>
                                <div className="col-md-4 scroll-animation" data-animation="fade_from_top">
                                    <a href="https://ivtpl.com/picldemo/">
                                        <img decoding="async" className="CI" src="/img/client-3.png" /></a>
                                </div>
                                <div className="col-md-4 scroll-animation" data-animation="fade_from_right">
                                    <a href="https://gdgps.gdgoenka.com/">
                                        <img decoding="async" className="CI" src="/img/client-4.png" /></a>
                                </div>
                                <div className="col-md-4 scroll-animation" data-animation="fade_from_left">
                                    <a href="https://ivtpl.com/"><img decoding="async" className="CI" src="/img/client-5.png" /></a>
                                </div>
                                <div className="col-md-4 scroll-animation" data-animation="fade_from_bottom">
                                    <a href="https://iccillsr.in/">
                                        <img decoding="async" className="CI" src="/img/client-6.png" /></a>
                                </div>
                                <div className="col-md-4 scroll-animation" data-animation="fade_from_bottom">
                                    <a href="https://applegroveschool.wpcomstaging.com/">
                                        <img decoding="async" className="CI" src="/img/client-7.png" /></a>
                                </div>
                                <div className="col-md-4 scroll-animation" data-animation="fade_from_bottom">
                                    <a href="https://sanskarschool.online/">
                                        <img decoding="async" className="CI" src="/img/client-8.png" /></a>
                                </div>
                                <div className="col-md-4 scroll-animation" data-animation="fade_from_bottom">
                                    <a href="https://www.vasavipridevijayamawards.com/">
                                        <img decoding="async" className="CI" src="/img/client-9.png" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </section>

    )
}

export default Testmonials