import { followApi, getUsers, unfollowApi } from "../api/api";

const FOLLOW = "FOLLEW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  // debugger
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    default:
      return state;
  }
};

export const followSuccess = (userId) => {
  return { type: FOLLOW, userId };
};

export const unfollowSuccess = (userId) => {
  return { type: UNFOLLOW, userId };
};
export const setUsers = (users) => {
  return { type: SET_USERS, users };
};

export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};
export const setTotalUsersCount = (totalCount) => {
  return { type: SET_TOTAL_USERS_COUNT, totalCount };
};

export const toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching };
};

export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsersApi = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    followApi(userId).then((response) => {
      if (response.data.resultCode == 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};
export const unFollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    unfollowApi(userId).then((response) => {
      if (response.data.resultCode == 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

export default usersReducer;