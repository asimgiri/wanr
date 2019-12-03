import React from 'react';

import { highlightsArr } from './DummyStore';

import Header from '../components/Header';
import Intro from '../components/Intro';
import Video from '../components/Video';
import About from '../components/About';
import Follow from '../components/Follow';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import HighlightsList from '../components/HighlightsList';



export default function Main() {
    return (
        <div className="wrapper">
            
            <Header/>

            <div className="main">

                <Intro/>

                <HighlightsList items={highlightsArr} />
                
                <Video />

                <About subtitle="
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iste, in impedit magnam possimus tempore consequuntur beatae adipisci a culpa atque praesentium veritatis similique vitae, recusandae placeat eveniet natus numquam mollitia sunt, odit sed nesciunt. Ducimus, maiores magni sapiente quaerat harum consequuntur numquam minima excepturi provident nisi distinctio nobis ex ullam? Aliquam pariatur consectetur esse incidunt. Impedit eius, ab quod blanditiis quia sint facilis voluptate iste nihil! Cumque eos corporis inventore vero dicta minima blanditiis repellat, voluptatem optio exercitationem atque, porro tenetur. Iste, enim doloremque nihil impedit aperiam nemo et exercitationem quaerat velit error consequuntur. Consectetur quidem iure voluptate perferendis."/>

                <Follow/>

                <Subscribe/>
                
                <Footer/>

            </div>
        </div>
    )
}