import React from 'react';

export default function Highlights(props) {
    return (
        <section className="highlights">
            <div className="img">
                <img src={props.src} alt="" width="438" />
        </div>
            <div className="content">
                <h2 className="title">{props.title}</h2>
                <p className="subtitle">{props.subtitle}</p>
            </div>
        </section>
    )
}