const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";


let initialState = {
    posts: [
      { id: 1, message: "I am Boss", likesCount: 199 },
      { id: 2, message: "second post", likesCount: 777 },
    ],
    newPostText: "New Post 2123",
  }

const profilePageReducer = (state = initialState, action) => {
    // debugger
  switch (action.type) {
    case ADD_POST:
      let post = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(post);
      state.newPostText = "";
      return state;
    case UPDATE_POST_TEXT:
      state.newPostText = action.PostText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator=()=>{
    return {type:ADD_POST}
  }
  
  export const updatePostTextActionCreator=(textAlert)=>{
    return {type:UPDATE_POST_TEXT, PostText:textAlert}
  }

export default profilePageReducer;
