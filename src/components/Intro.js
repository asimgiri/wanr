import React from 'react';
import { countryFlags } from '../containers/DummyStore';

export default function Intro() {
    return (
        <section className="intro">
            <div className="container center">
                <img src={require('../assets/logo.png')} alt="" className="spacing" />
                <h2 className="title spacing">Meet new people with wanr</h2>
                <p className="subtitle space">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
                <div className="col">
                    {countryFlags.map((value, index) => {
                        return (
                            <div className="content">
                                <img src={value.src} alt="" />
                                <p className="subtitle">{value.title}</p>
                                <span className="subtitle">{value.subtitle}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}