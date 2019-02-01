import React, { Component } from "react";
import { connect } from "react-redux";
import { requestStart } from "../actions/actionUser";
import { User } from "../components/User";
import { Preloader } from "../components/Preloader"
import { Error } from "../components/Error"

class UserContainer extends Component {
  componentDidMount() {
    this.props.addUsers();
  }
  render() {
    const { isLoading, requestError, users } = this.props;
    if (isLoading) {
      return <Preloader />;
    }
    if (requestError) {
      return <Error error={requestError} />;
    }
    return (
      <User users={users} />
    )
  }
}

const mapStateToProps = store => ({
  users: store.user.users,
  isLoading: store.user.isLoading,
  requestError: store.user.requestError
});

const mapDispatchToProps = dispatch => {
  return {
    addUsers: () => dispatch(requestStart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
