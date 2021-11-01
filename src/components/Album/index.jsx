import React from "react";

import './style.css';

export const Album = ({ name, releaseDate, coverArt }) => {
    return (
        <div>
            <p>Album</p>
            <h3>{name}</h3>
            <em>Released on: {releaseDate}</em>
            <p>Cover {coverArt}</p>
        </div>
    )
};