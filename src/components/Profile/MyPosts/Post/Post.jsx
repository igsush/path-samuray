import React from "react";
import postClasses from './Post.module.css'

const Post = (props) => {
  return (
    <div className={postClasses.item}>
      <img src="https://sovietgames.su/wp-content/uploads/2016/07/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0.jpg"></img>
      {props.message}
      <div>
      <span>like {props.count}</span>
      </div>
    </div>
    
  );
};

export default Post;
