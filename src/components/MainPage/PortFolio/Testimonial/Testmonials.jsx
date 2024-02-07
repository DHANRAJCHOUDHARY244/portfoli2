import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import { data } from './data'
import { useGSAP } from '@gsap/react';
const Testmonials = () => {
    const divRef = useRef(null);
    const idArray = data.map(item => item.id);
    const [testId, settestId] = useState(idArray[0]);
    useGSAP(()=>{
        const t1=gsap.timeline()
        t1.from(`#test${testId}`,{
            x:-100,
            scale:2,
            duration:0.5,
            ease:'slow'
        })
    t1.from(`#testN${testId}`,{
        opacity:0,
        scale:2,
        duration:0.5,
        ease:'slow'
    })

    },{scope:divRef,dependencies:[testId]})
    useEffect(() => {
        document.getElementById(`test${idArray[0]}`).style.display = "block";
    }, [])

    const nextTest = (id) => {
        const MaxLength = idArray.length;
        if (id < MaxLength) {
            settestId(id + 1)
            const csssId = `test${id + 1}`;
            const csssIdP = `test${id}`;
            document.getElementById(csssIdP).style.display = "none";
            document.getElementById(csssId).style.display = "block";
        }
    }

    const prevTest = (id) => {
        const MinId = idArray[0];
        if (MinId < id) {
            settestId(id - 1)
            const csssId = `test${id - 1}`;
            const csssIdP = `test${id}`;
            document.getElementById(csssIdP).style.display = "none";
            document.getElementById(csssId).style.display = "block";
        }
    }

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
                        <div className="testimonial-slider-wrap ">
                            <div className=" testimonial-slider" ref={divRef}>
                                {data.map((item) => (
                                    <div className="testimonial-item" id={`test${item.id}`} style={{ display: 'none' }}>
                                        <div className="testimonial-item-inner">
                                            <div className="author d-flex align-items-center">
                                                <img decoding="async" src={item.src} alt="portfolio" />
                                                <div className="right">
                                                <div id={`testN${item.id}`}>
                                                    <h3 >{item.name}</h3>
                                                </div>
                                                    <p className="designation">
                                                        {item.position}
                                                        <a href={item.webLink}><span>{item.company}</span></a>
                                                    </p>
                                                </div>
                                            </div> <p>Dhanraj - A Developer with the creativity, professional and master of code. Much more than what i'm expect. High quality product &amp; flexiable price. Recommended!.”
                                            </p>
                                            <a href={item.webLink} className="project-btn">Project</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="testimonial-footer-nav">
                                <div className="testimonial-nav d-flex align-items-center">
                                    <button className="prev"><i className="las la-angle-left" onClick={() => {
                                        prevTest(testId)
                                    }} /></button>
                                    <div id="testimonial-slide-count">
                                    </div>
                                    <button className="next" onClick={() => {
                                        nextTest(testId)
                                    }}><i className="las la-angle-right" /></button>
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