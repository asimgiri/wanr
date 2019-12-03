import React from 'react';

export default function Header() {
    return (
        <header>
            <div className="content">
                <img src={require('../assets/logo_white.png')} alt="" className="spacing logo" />
                <h1 className="text_white spacing">Enjoy our new <br />Dating & Meetup app</h1>
                <p className="subtitle text_white spacing">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
                <ul>
                    <li>
                        <button className="download_btn"><img src={require('../assets/google-play.svg')} alt="" /> <span>available on <br /> Google Store</span></button>
                    </li>
                    <li>
                        <button className="download_btn"><img src={require('../assets/ios.svg')} alt="" /> <span>available on <br /> Apple Store</span></button>
                    </li>
                </ul>
            </div>

            <img src={require('../assets/mobile.png')} alt="" width="1200px" className="mobile" />
        </header>
    )
}