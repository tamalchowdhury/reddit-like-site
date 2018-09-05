import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="votes">10</div>
      <div className="media">Some image</div>
      <div className="content">
        <div className="title-area">
          <span className="title">
            <a href={post.data.url}>{post.data.title} </a>
          </span>
          <span className="url">({post.data.domain})</span>
        </div>
        <div className="meta-area">
          <span className="time">
            Submitted 9 hours ago by {post.data.name} to r/node
          </span>
        </div>
        <div className="link-area">
          <span>
            {post.data.num_comments} comments share save hide give gold report
            crosspost
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
