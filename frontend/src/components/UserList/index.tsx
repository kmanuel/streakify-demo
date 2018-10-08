import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from "../../../redux/actions/actions";
import { User } from 'client/api';
import AppState from "../../../redux/appState";

function mapStateToProps(state: AppState) {
    return { users: state.users.users };
}

class UserList extends Component<any, any> {

    componentDidMount() {
        this.props.loadUsers();
    }

    private static toUserItem(user: User) {
        return (
            <li key={user.id}>
                <span>{user.name}</span> - <span>{user.email}</span>
            </li>
        );
    }

    render() {
        let { users } = this.props;
        const userItems = users.map(UserList.toUserItem);

        return (
            <div>
                <ul>
                    {userItems}
                </ul>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    { loadUsers }
)(UserList);

