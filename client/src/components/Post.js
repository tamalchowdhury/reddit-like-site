import React from 'react';

const Post = ({ post, upVote, downVote, index }) => {
  return (
    <div className="post">
      <div className="votes">
        <div className="upvote" onClick={() => upVote(index)}>
          <span role="img" aria-label="up vote">
            ⬆️
          </span>
        </div>
        <div className="votecount">{post.votes}</div>
        <div className="downvote" onClick={() => downVote(index)}>
          <span role="img" aria-label="down vote">
            ⬇️
          </span>
        </div>
      </div>
      <div className="media">Some image</div>
      <div className="content">
        <div className="title-area">
          <span className="title">
            <a href="#">{post.title} </a>
          </span>
          <span className="url">(domain)</span>
        </div>
        <div className="meta-area">
          <span className="time">
            Submitted 9 hours ago by {post.author} to r/node
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
