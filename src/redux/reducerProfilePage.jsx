const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "I am Boss", likesCount: 199 },
    { id: 2, message: "second post", likesCount: 777 },
  ],
  newPostText: "New Post 2123",
  profile: null,
};

const profilePageReducer = (state = initialState, action) => {
  // debugger
  switch (action.type) {
    case ADD_POST: {
      let post = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return { ...state, posts: [...state.posts, post], newPostText: "" };
    }
    case UPDATE_POST_TEXT: {
      return { ...state, newPostText: action.PostText };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updatePostTextActionCreator = (textAlert) => {
  return { type: UPDATE_POST_TEXT, PostText: textAlert };
};

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export default profilePageReducer;