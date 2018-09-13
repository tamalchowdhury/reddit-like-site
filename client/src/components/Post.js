import React from 'react';
import moment from 'moment';

const Post = ({ post, vote, index }) => {
  return (
    <div className="post">
      <div className="votes">
        <div className="upvote" onClick={() => vote(post._id, index, true)}>
          <span role="img" aria-label="up vote">
            ⬆️
          </span>
        </div>
        <div className="votecount">{post.votes}</div>
        <div className="downvote" onClick={() => vote(post._id, index, false)}>
          <span role="img" aria-label="down vote">
            ⬇️
          </span>
        </div>
      </div>

      <div className="content">
        <div className="title-area">
          <span className="title">
            <a href="#">{post.title} </a>
          </span>
        </div>
        <div className="meta-area">
          <span className="time">
            Submitted {moment(post.posted).fromNow()} by {post.author}
          </span>
        </div>
        <div className="link-area">
          <span>5 comments share save hide give gold report crosspost</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
