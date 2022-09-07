import React from "react";

const PictureListPost = ({ post }) => {
    const { id, content } = post;
    return (
        <>
            <div key={id}>
                {content}
            </div>
        </>
    );
};

export default PictureListPost;