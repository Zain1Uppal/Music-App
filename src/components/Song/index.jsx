import React from "react";

export const Song = ({ songs }) => {
    return (
        <ul>
            {
                songs.map(song => (
                    <li>
                        <strong role="heading" aria-label="headline">{song}</strong>
                    </li>
                ))
            }
        </ul>
    )
}