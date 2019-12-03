import React from 'react';
import HeaderTwo from '../components/HeaderTwo';
import Paragraph from '../components/Paragraph';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';

export default function PrivacyContainer() {
    return (
        <div className="wrapper">
            <div className="container">
                <HeaderTwo />
                <Paragraph />
                <Subscribe />
                <Footer />
            </div>
        </div>
    )
}