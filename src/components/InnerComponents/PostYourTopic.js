import React from 'react';

function PostYourTopic() {
    return (
        <div className="comentpostBox">
            <form action="#">
                <h4>Post your comment here:</h4>
                <textarea name="PostYourTopic" id="PostYourTopic" placeholder='Tap to type' ></textarea>
            </form>
        </div>
    );
}

export default PostYourTopic;