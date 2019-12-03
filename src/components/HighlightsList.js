import React from 'react';
import Highlights from './Highlights';

export default function HighlightsList(props) {
    return (
        <div className="highlights_list">
            <div className="container">
                {props.items.map((value, index) => {
                    return (
                        <Highlights
                            src={value.src}
                            title={value.title}
                            subtitle={value.subtitle}
                        />
                    )
                })}
            </div>
        </div>
    )
}