import React from 'react'
import PopupOverlay from '../../PopupOverlay/PopupOverlay'
import { ProjectData } from './data'
const PortfolioArea = () => {
    return (
        <section className="portfolio-area">
            <div className="custom-container">
                <div className="portfolio-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-grip-vertical" /> portfolio
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom">
                            Featured
                            <span>Projects</span>
                        </h1>
                    </div>
                    <div className="row portfolio-items">
                        {ProjectData.map((item) => (
                            <div className="col-md-12 scroll-animation" data-animation="fade_from_bottom" key={item.id}>
                                <div className="portfolio-item portfolio-full">
                                    <div className="portfolio-item-inner">
                                        <a href="/img/portfolio4.png" data-lightbox="example-1">
                                            <img src={item.img} style={{ objectFit: 'contain' }} alt />
                                        </a>
                                        <ul className="portfolio-categories">
                                            <li>
                                               <PopupOverlay src={item.src} />
                                            </li>
                                            {item.buttons.map((btn)=>(
                                                <li key={btn.id}>
                                                <a href="#portfolio">{btn.name}</a>
                                            </li>
                                            ))}
                                            
                                        </ul>
                                    </div>
                                    <h2><a href="https://dashboarddj.pages.dev/">React
                                        Dashboard </a></h2>
                                </div>
                            </div>
                        ))}

                    </div>
                </div></div></section>

    )
}

export default PortfolioArea