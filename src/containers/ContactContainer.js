import React from 'react';
import HeaderTwo from '../components/HeaderTwo';

export default function ContactContainer() {
    return (
        <div className="wrapper">
            <div className="container">
                <HeaderTwo />
                <h2 className="title spacing">Contact Us</h2>
                <div className="contact">
                    <div className="spacing">
                        <form action="">
                            <ul>
                                <li className="spacing_two">
                                    <input type="text" placeholder="Full Name" />
                                </li>
                                <li className="spacing_two">
                                    <input type="text" placeholder="Full Name" />
                                </li>
                                <li className="spacing">
                                    <textarea placeholder="Message" />
                                </li>
                            </ul>
                        </form>
                        <div>
                            <button className="primary_btn">SEND</button>
                        </div>
                    </div>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14132.29938469037!2d85.3400199!3d27.6840815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7baf1bf92ea9204c!2sEnfiny%20Innovations!5e0!3m2!1sen!2snp!4v1575353576198!5m2!1sen!2snp" width="700" height="330px" frameborder="0" style={{ border: 0, borderRadius: 20 }} allowfullscreen="" className="spacing"></iframe>

                        <div className="location">
                            <div>
                                <p className="subtitle bold">where to find us</p>
                                <p className="subtitle">577 Bellevue Avenue <br />Malden, MA 02148</p>
                            </div>
                            <div>
                                <p className="subtitle">Mockupsforfree@gmail.com <br />+1222 345 0000</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}