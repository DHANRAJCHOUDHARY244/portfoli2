import React from 'react'
import Heading from '../../../Animations/Heading'
import { data } from './data'
import TypingText from '../../../Animations/TypingText'
const Pricing = () => {
    return (
            <section className="pricing-area" id="pricing">
                <div className="custom-container">
                    <div className="pricing-content content-width">
                        <Heading
                            heading={'Pricing'}
                            subHeading1={"My"}
                            subHeading2={'Pricing'}
                            iconClass={"las la-rupee-sign"}
                        />
                        <div className="pricing-table-items">
                            <div className="row">
                                {data.map(item => (
                                    <div className="col-md-6 mt-1 mb-1" key={item.id}>
                                        <div className="pricing-table">
                                            <div className="pricing-table-header">
                                                <div className="top d-flex justify-content-between align-items-start">
                                                    <h4>{item.heading}</h4>
                                                    <p className="text-right">{item.subHead1}<br />{item.subHead2}</p>
                                                </div>
                                                <h1>{item.money}<span>{item.duration}</span></h1>
                                            </div>
                                            <ul className="feature-lists">
                                                {item.listItem.map(subItem => (
                                                    <li key={subItem.id} >{subItem.item}</li>
                                                ))}
                                            </ul>
                                            <a href={item.button.link} className="theme-btn">{item.button.text}</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <p className="info" data-animation="fade_from_bottom"> 
                                <TypingText  
                                    text={"Don't find any package match with your plan! "}/>
                                    {`\n`}
                                <TypingText  
                                    text={"Want to setup a new tailor-made package for only you?. "}/>
                                 <a href="#contact">Contact
                                    Us</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

    )
}

export default Pricing