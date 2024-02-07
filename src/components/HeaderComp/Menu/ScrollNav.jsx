import React from 'react'

const ScrollNav = () => {
    return (
        <ul className="dmenu scroll-nav d-flex">
            <li>
                <a className="scroll-to" href="#home">
                    <span>Home</span> <i className="las la-home" />
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#about">
                    <span>About</span> <i className="lar la-user" />
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#resume">
                    <span>Resume</span> <i className="las la-briefcase" />
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#services">
                    <span>Services</span> <i className="las la-stream" />
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#skills">
                    <span>Skills</span> <i className="las la-shapes" />
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#portfolio">
                    <span>Portfolio</span> <i className="las la-grip-vertical" />
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#testimonial">
                    <span>Testimonial</span> <i className="lar la-comment" />
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#contact">
                    <span>Contact</span> <i className="las la-envelope" />
                </a>
            </li>
        </ul>

    )
}

export default ScrollNav