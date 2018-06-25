import React, { Component } from 'react';
import { connect } from 'react-redux';
import { exportPage } from './utils';

import LayoutMain from '../components/LayoutMain';
import { fetchUsers } from '../store/actions';

class UsersList extends Component {
  static loadData({ dispatch }) {
    return dispatch(fetchUsers());
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    const { users } = this.props;

    return users.map(user => (
      <li key={user.id}>
        {user.name}
      </li>
    ));
  }

  render() {
    return (
      <LayoutMain>
        <section>
          <h1>
            Here's a big list of users:
          </h1>
          <ul>
            {this.renderUsers()}
          </ul>
        </section>
      </LayoutMain>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

export default exportPage(UsersList, connect(mapStateToProps, { fetchUsers }));
