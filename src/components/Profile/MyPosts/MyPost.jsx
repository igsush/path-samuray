import React from "react";
import myPostClasses from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = () => {
  let postsData = [
    { id: 1, message: "hi man", likesCount: 199 },
    { id: 2, message: "second post", likesCount: 777 },
  ];

  let postElements = postsData.map((post) => (
    <Post message={post.message} count={post.likesCount} />
  ));

  return (
    <div className={myPostClasses.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add Post</button>
      </div>
      <div className={myPostClasses.posts}>{postElements}</div>
    </div>
  );
};

export default MyPost;
