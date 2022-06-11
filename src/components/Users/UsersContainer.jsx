import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unFollow,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
  getUsersApi,
} from "../../redux/reducerUsers";
import React from "react";
import Users from "./Users";
import Loader from "../common/Loader/Loader";

class UsersApiComponent extends React.Component {
  componentDidMount() {
    this.props.getUsersApi(this.props.currentPage, this.props.pageSize);
  }
  onPageChange = (pageNumber) => {
    this.props.getUsersApi(pageNumber, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Loader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          users={this.props.users}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
  getUsersApi,
})(UsersApiComponent);