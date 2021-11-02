import React from "react";

export const Song = ({ songsArray }) => {
    return (
        <ul>
            {
                songsArray.map(song => (
                    <li>
                        <strong role="heading" aria-label="headline">{song}</strong>
                    </li>
                ))
            }
        </ul>
    )
}