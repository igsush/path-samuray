import { connect } from "react-redux";
import {
  updatePostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/reducerProfilePage";
import MyPost from "./MyPost";



let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText
        
    }
  }
  let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (body) => {
            dispatch(updatePostTextActionCreator(body));
        }
    }
  }

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostsContainer;