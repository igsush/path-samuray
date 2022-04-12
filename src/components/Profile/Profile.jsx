import React from "react";
import MyPost from "./MyPosts/MyPost";
import profileClasses from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={profileClasses.content}>
      <div>
        <img src="https://picsum.photos/1000/600?image=970"></img>
      </div>
      <div>ava + description</div>
      <MyPost></MyPost>
    </div>
  );
};

export default Profile;
