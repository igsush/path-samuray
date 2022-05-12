import React from "react";
import {
  updatePostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/reducerProfilePage";
import StoreContext from "../../../StoreContext";
import MyPost from "./MyPost";

const MyPostsContainer = () => {
  
  return (
      <StoreContext.Consumer>
          {
          (store) => {
              let state = store.getState();
              let addPost = () => {
                  store.dispatch(addPostActionCreator());
              }

              let onPostChange = (text) => {
                  let action = updatePostTextActionCreator(text);
                  store.dispatch(action);
              }

              return <MyPost updateNewPostText={onPostChange}
                              addPost={addPost}
                              posts={state.profilePage.posts}
                              newPostText={state.profilePage.newPostText}/>
          }
      }
      </StoreContext.Consumer>
  )
}

export default MyPostsContainer;