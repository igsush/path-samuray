import React from "react";
import ProfileInfoClass from "./ProfileInfo.module.css";
import Loader from "../../common/Loader/Loader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />;
  }
  return (
    <div>
      <div>
        <img width="500px" src="https://picsum.photos/1000/600?image=970"></img>
      </div>
      <div className={ProfileInfoClass.descriptionBlock}>
        <img src={props.profile.photos.large} />
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;