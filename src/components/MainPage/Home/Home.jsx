import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
const Home = () => {
    const comp = useRef(null)
    const compM = useRef(null)
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()
            t1.from("#ICONHEAD", {
                xPercent: "-100",
                duration: 1,
                delay: 0.3,
                ScrollTrigger:{
                    trigger:compM.current,
                    start:"top top",
                    end:"bottom top",
                    scrub:true
                }
            }).from("#intro-1", {
                opacity: 0,
                scale: 2,
                delay: 0.3,
            })
            .from("#intro-2", {
                rotateX: 360,
                duration: 2,
                scale:2,
                ease:"slow"
                })
                .from("#intro-3", {
                    opacity:0,
                    delay:0.1,
                    scale:2
                })

        }, comp)

        return () => ctx.revert()
    }, [])
    return (
        <section id="home" ref={compM}>
            <section className="hero-section" ref={comp}>
                <div className="custom-container">
                    <div className="hero-content content-width">
                        <div className="section-header">
                            <h4 className="subtitle scroll-animation" id="ICONHEAD">
                                <i className="las la-home" /> INTRODUCE
                            </h4>
                            <h1 id="intro-1">Say
                                Hi from
                                <div id="intro-2" ><span>Dhanraj ,</span>
                                </div>
                                <div id="intro-3">Webflow Designer and Developer</div>
                            </h1>
                        </div>
                        <p className="scroll-animation" >I
                            design
                            and code
                            beautifully simple things and i love what i do. Just
                            simple like that!</p>
                        <a href="#portfolio" className="go-to-project-btn scroll-to scroll-animation" >
                            <img decoding="async" src="/img/round-text.png" alt="Rounded Text" />
                            <i className="las la-arrow-down" />
                        </a>
                        <div className="facts d-flex">
                            <div className="left scroll-animation" data-animation="fade_from_left">
                                <h1>2+</h1>
                                <p>Years of <br />Experience</p>
                            </div>
                            <div className="right scroll-animation" >
                                <h1>22+</h1>
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