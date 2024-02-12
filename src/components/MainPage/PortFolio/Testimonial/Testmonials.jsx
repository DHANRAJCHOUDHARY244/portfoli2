import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import { clients, data } from './data'
import { useGSAP } from '@gsap/react';
import Heading from '../../../Animations/Heading';
import TypingText from '../../../Animations/TypingText';
import './animation.scss'
import { useInView } from 'framer-motion';
import LazyImage from '../../../LazyImage/LazyImage';
const Testmonials = () => {
    const divRef = useRef(null);
    const refHeader = useRef(null)
    const inViewH = useInView(refHeader);
    const idArray = data.map(item => item.id);
    const [testId, settestId] = useState(idArray[0]);
    useGSAP(() => {
        const t1 = gsap.timeline()
        t1.from(`#test${testId}`, {
            x: -100,
            scale: 2,
            duration: 0.5,
            ease: 'slow'
        })
        t1.from(`#testN${testId}`, {
            opacity: 0,
            scale: 2,
            duration: 0.5,
            ease: 'slow'
        })

    }, { scope: divRef, dependencies: [testId] })
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
                        <Heading
                            heading={'testimonial'}
                            subHeading1={"Trusted by"}
                            subHeading2={'Hundred Clients'}
                            iconClass={"lar la-comment"}
                        />
                        <div className="testimonial-slider-wrap ">
                            <div className=" testimonial-slider" ref={divRef}>
                                {data.map((item) => (
                                    <div className="testimonial-item" id={`test${item.id}`} style={{ display: 'none' }}>
                                        <div className="testimonial-item-inner">
                                            <div className="author d-flex align-items-center">
                                                <LazyImage
                                                    src={item.src} alt="portfolio"
                                                />
                                                <div className="right">
                                                    <div id={`testN${item.id}`}>
                                                        <h3 >{item.name}</h3>
                                                    </div>
                                                    <p className="designation">
                                                        {item.position}
                                                        <a href={item.webLink}><span>{item.company}</span></a>
                                                    </p>
                                                </div>
                                            </div> <p>
                                                <TypingText text={item.desc} />
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
                            <h5 data-animation="fade_from_bottom">
                                work
                                with 15+
                                brands in INDIA </h5>
                            <div className="row align-items-center" ref={refHeader}>
                                {clients.map(item => (
                                    <div className={`col-md-4 ${inViewH ? item.animation : ''} `} key={item.id}>
                                        <a href={item.link}>
                                        <LazyImage
                                            className="CI" src={item.img} alt={item.img}
                                        />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </section>

    )
}

export default Testmonials