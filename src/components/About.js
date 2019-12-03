import React from 'react';

export default function About(props) {
    return (
        <section className="about center">
            <div className="container">
                <h2 className="title spacing">About Wanr</h2>
                <p className="subtitle">
                    {props.subtitle}
                </p>
            </div>
        </section>
    )
}