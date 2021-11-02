import React, { useState } from "react";
import { Song } from '../Song';

export const SeeMore = ({ songsArray }) => {
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
            <div style={{ display: seeMore ? 'block' : 'none' }}>
                <Song songsArray={songsArray} />
            </div>
        </>
    )
}