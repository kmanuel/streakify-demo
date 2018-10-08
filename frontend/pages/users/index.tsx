import * as React from "react";
import Layout from "../../src/components/Layout/index";
import UserList from "../../src/components/UserList/index";

class Users extends React.Component<{}, {}> {
    render() {
        return (
            <Layout>
                <div>
                    <h1>Users</h1>
                    <UserList />
                </div>
            </Layout>
        );
    }
}

export default Users;