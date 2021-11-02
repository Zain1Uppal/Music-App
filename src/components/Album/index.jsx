import React from "react";

export const Album = ({ albums }) => {
    return (
        albums.map(album => (
            <div>
                <h3>{album.album}</h3>
                <em>Released on: {album.releaseDate}</em>
                <img src={album.img} />
            </div>
        ))
    )
};