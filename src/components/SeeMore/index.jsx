import React, { useState } from "react";
import { Album } from '../Album';
import { Song } from '../Song';

export const SeeMore = ({ album, songsArray }) => {
    const [seeMore, setSeeMore] = useState(false);

    function seeSongs() {
        setSeeMore((prevSeeMore) => !prevSeeMore)
    }

    return (
        <>
            <button
                onClick={seeSongs}
                role="switch"
            >See More...</button>
            <div role="seeMore" style={{ display: seeMore ? 'block' : 'none' }}>
                <Album album={album} />
                <Song songsArray={songsArray} handleSelect={setSeeMore} songTitle={songsArray[1]} />
            </div>
        </>
    )
}