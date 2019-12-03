import React from 'react';

export default function HeaderTwo() {
    return (
        <div className="header_two spacing">
            <div className="logo_colored" width="100%" height="100%">
                <img src={require('../assets/logo.png')} alt="" width="80"/>
            </div>
            <div>
                <ul>
                    <li>
                        <button className="download_btn"><img src={require('../assets/google-play.svg')} alt="" /> <span>available on <br /> Google Store</span></button>
                    </li>
                    <li>
                        <button className="download_btn"><img src={require('../assets/ios.svg')} alt="" /> <span>available on <br /> Apple Store</span></button>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="spacing">
                    <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href=""><i className="fab fa-twitter"></i></a></li>
                    <li><a href=""><i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    )
}