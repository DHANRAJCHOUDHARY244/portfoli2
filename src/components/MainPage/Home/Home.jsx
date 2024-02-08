import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TextPlugin from 'gsap/TextPlugin';
import { data } from 'jquery';
import InfiniteText from './InfiniteText';
gsap.registerPlugin(useGSAP);


const Home = () => {
    const compM = useRef(null)
    const paraRef= useRef(null)
   
    useGSAP(() => {
        const t1 = gsap.timeline()
        t1.from("#ICONHEAD", {
            xPercent: "-100",
            duration: 0.1,

        })
        t1.from("#intro-1", {
            opacity: 0,
            scale: 2,
        })

        t1.from("#intro-3", {
            opacity: 0,
            delay: 0.1,
            scale: 2,
        })

    }, { scope: compM })

    useGSAP(() => {
        const t1 = gsap.timeline({ duration: 2 }); 
        gsap.from(paraRef.current,{
            scale:5,
            ease: 'power2.inOut',
            duration:4
        }) 
        t1.fromTo('span', {
            opacity: 0,
        }, { 
            opacity: 1,
            stagger: 0.1 // Adjust stagger here if needed
        });
    }, { scope: paraRef });
    
    useGSAP(()=>{
        gsap.from('.NumCounters',{
            scale:2,
            duration:3
        })
    })
    return (
        <section id="home" ref={compM}>
            <section className="hero-section" > 
                <div className="custom-container">
                    <div className="hero-content content-width">
                        <div className="section-header">
                            <h4 className="subtitle scroll-animation" id="ICONHEAD">
                                <i className="las la-home" /> INTRODUCE
                            </h4>
                            <h1 id="intro-1">Say
                                Hi from
                                <div id="intro-2" ><InfiniteText text={'Dhanraj ,'} speed={2} />
                                </div>
                                <div id="intro-3">Webflow Designer and Developer</div>
                            </h1>
                        </div>
                        <p ref={paraRef}>
                            <span> I</span>
                            <span> design</span>
                            <span> and</span>
                            <span> code</span>
                            <span> beautifully</span>
                            <span> simple</span>
                            <span> things</span>
                            <span> and</span>
                            <span> i</span>
                            <span> love</span>
                            <span> what</span>
                            <span> i</span>
                            <span> do</span>
                            <span> .</span>
                            <span> just</span>
                            <span> simple</span>
                            <span> like</span>
                            <span> that</span>
                            <span> !</span></p>
                        <a href="#portfolio" className="go-to-project-btn scroll-to scroll-animation" >
                            <img decoding="async" src="/img/round-text.png" alt="Rounded Text" />
                            <i className="las la-arrow-down" />
                        </a>
                        <div className="facts d-flex">
                            <div className="left scroll-animation" data-animation="fade_from_left">
                                <h1 className='NumCounters'>2+</h1>
                                <p>Years of <br />Experience</p>
                            </div>
                            <div className="right scroll-animation" >
                                <h1 className='NumCounters'>22+</h1>
                                <p>projects completed on <br />4 States</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    )
}

export default Home