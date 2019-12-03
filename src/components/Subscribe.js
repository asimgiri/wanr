import React from 'react';

export default function Subscribe() {
    return (
        <section className="subscribe">
            <div className="container center">
                <h2 className="title spacing">Subscribe for updates.</h2>
                <input type="email" placeholder="EMAIL ADDRESS" className="spacing_two"/>
                <div className="">
                    <button className="primary_btn">SIGN UP</button>
                </div>
            </div>
        </section>
    )
}