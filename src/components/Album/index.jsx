import React from "react";

export const Album = ({ album }) => {
    return (
        // albums.map(album => (
        //     <div>
        //         <h3>{album.album}</h3>
        //         <em>Released on: {album.releaseDate}</em>
        //         <img src={album.img} />
        //     </div>
        // ))
        <div>
            <h3>{album.album}</h3>
            <em>Released on: {album.releaseDate}</em>
            <img src={album.img} />
        </div>
    )
};