import React, { useState } from "react";

export const LikesCount = () => {
    const [likesCount, setLikesCount] = useState(0);

    function increaseCount() {
        setLikesCount((prevLikesCount) => prevLikesCount + 1);
    }

    return (
        <>
            <p>Number of likes: <span role="figure" id="likes">{likesCount}</span></p>
            <button onClick={increaseCount}>Like!</button>
        </>
    )
}