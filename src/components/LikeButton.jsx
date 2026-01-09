import React, { useState } from 'react';

function LikeButton({likes}) {
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked);
    };

    return (
        <div>
            <a className={`like-button text-[13px] ${liked ? 'liked' : ''} pt-1 pb-1 px-2 pe-2`} onClick={handleLikeClick}>
                <span className="like-icon cursor-pointer">
                    <span className="heart-animation-1"></span>
                    <span className="heart-animation-2"></span>
                </span>
                Likes {likes}
            </a>
        </div>
    );
}

export default LikeButton;
