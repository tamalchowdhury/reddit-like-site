import React from 'react';

const Postbox = ({ newPost }) => {
  return (
    <div className="post-box">
      <h4>Post something!</h4>
      <form className="post-form" action="" onSubmit={newPost}>
        <input type="text" name="title" />
        <textarea name="body" id="" cols="30" rows="10" />
        <button>Post</button>
      </form>
    </div>
  );
};

export default Postbox;
