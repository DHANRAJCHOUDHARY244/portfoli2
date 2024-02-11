import React from 'react'

const LeftSidebar = () => {
    return (
        <div className="left-sidebar">
            <div className="sidebar-header d-flex align-items-center justify-content-between">
                <img src="/img/logo.png" alt="Logo" />
                <span className="designation">Web &amp; Full Stack Developer</span>
            </div>
            <img className="me" src="/img/me.jpg" alt="Me" />
            <h2 className="email" style={{ fontSize: 18 }}>choudharydhanraj239@gmail.com</h2>
            <h2 className="address">Based in Ajmer, INDIA</h2>
            <p className="copyright">©
                <span id="date" /> Dhanraj. All Rights Reserved
            </p>
            <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
                <li>
                    <a href="https://www.instagram.com/dhanrajchoudhary507/"><i className="lab la-instagram" /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/dhanraj-choudhary-550892286/"><i className="lab la-linkedin" /></a>
                </li>
                <li>
                    <a href="https://www.facebook.com/dhanraj.chaudhari.75873"><i className="lab la-facebook" /></a>
                </li>
                <li>
                    <a href="https://github.com/DHANRAJCHOUDHARY244"><i className="lab la-github" /></a>
                </li>
            </ul>
            <a href="#contact" className="theme-btn " onClick={() => {
                document.getElementById("HIRE").style.display = "block";
                document.getElementById("PAGE").style.display = "none";
            }}>
                <i className="las la-envelope" /> Hire Me! </a>
        </div>

    )
}

export default LeftSidebar