import React from 'react';
import { followPhotos } from '../containers/DummyStore';

export default function Follow() {
    return (
        <section className="follow">
            <div className="container">
                <h2 className="title center spacing">Follow us on Instagram </h2>
                <div className="col">
                    {followPhotos.map((value, index) => {
                        return (
                            <img src={value.src} alt="" />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}