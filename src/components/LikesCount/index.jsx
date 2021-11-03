import React, { useState } from "react";

export const LikesCount = () => {
    const [likesCount, setLikesCount] = useState(0);
    const [liked, setLiked] = useState(false);

    function count() {
        setLiked((prevLiked) => !prevLiked)
        // Change this line
        if (liked) {
            decreaseCount()
        } else {
            increaseCount()
        }
    }

    function increaseCount() {
        setLikesCount((prevLikesCount) => prevLikesCount + 1);
    }

    function decreaseCount() {
        setLikesCount((prevLikesCount) => prevLikesCount - 1);
    }

    return (
        <>
            <button
                onClick={count}
                role="switch"
                style={{ backgroundColor: liked ? 'green' : 'grey' }}
            >Like!</button>
            <p>Number of likes: <span role="figure" id="likes">{likesCount}</span></p>
        </>
    )
}