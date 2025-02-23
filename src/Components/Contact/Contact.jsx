import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact =() =>{
    return(
        <section id='Contact' className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* left side */}
                <div className="c-left flexColStart">
                    <span className='orangeText'>Our Contacts</span>
                    <span className='primaryText'>Easy To Contact Us</span>
                    <span className='secondaryText'>Our customer support staff is always ready to talk to you and alleviate any issues and doubts</span>
                    
                    <div className="flexColStart contactModes">
                        {/* first row */}
                        <div className="flexCenter row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size = {25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span>Call</span> 
                                        <span>021-123-145-14</span>
                                    </div>
                                </div>
                                <div className="flexCenter flexColStart button">
                                        Call Now
                                </div>
                            </div>
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size = {25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span>Chat</span> 
                                        <span>021-123-145-14</span>
                                    </div>
                                </div>
                                <div className="flexCenter flexColStart button">
                                        Call Now
                                </div>
                            </div>
                            {/* second row */}   
                            <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size = {25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span>Call</span> 
                                        <span>021-123-145-14</span>
                                    </div>
                                </div>
                                <div className="flexCenter flexColStart button">
                                        Call Now
                                </div>
                            </div>
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size = {25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span>Chat</span> 
                                        <span>021-123-145-14</span>
                                    </div>
                                </div>
                                <div className="flexCenter flexColStart button">
                                        Call Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                {/* right side */}
                <div className="c-right">
                    <div className="image-container">
                        <img src='./contact-2.jpg' alt=""/>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
export default Contact