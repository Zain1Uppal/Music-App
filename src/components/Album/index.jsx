import React from "react";

export const Album = ({ album }) => {
    return (
        <div className="album">
            <em className="releaseDatePTag">Released on: {album.releaseDate}</em>
            <img src={album.img} />
        </div>
    )
};