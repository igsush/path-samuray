import React from "react";
import myPostClasses from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {
  console.log(props)
  let postElements = props.posts.map((post) => (
    <Post message={post.message} count={post.likesCount} />
    //props.posts
  ));

  let postElement = React.createRef();

  let addPost = () => {
    // props.addPost(textAlert);
    // props.dispatch(addPostActionCreator())
    props.addPost()
  };

  let updatePostText = () => {
    let text = postElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={myPostClasses.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea
          onChange={updatePostText}
          ref={postElement}
          value={props.newPostText}
        />
      </div>
      <div>
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className={myPostClasses.posts}>{postElements}</div>
    </div>
  );
};

export default MyPost;