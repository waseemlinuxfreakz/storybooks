import React from 'react';

function PostyourComment() {
    return (
        <div className="comentpostBox">
            <form action="#">
                <h4>Post your comment here:</h4>
                <textarea name="ComentPostBox" id="ComentPostBox" placeholder='Tap to type' ></textarea>
            </form>
        </div>
    );
}

export default PostyourComment;