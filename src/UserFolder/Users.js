import React, { Component } from 'react'
import User from './User.js';
import UserConsumer from "../context";
// import PropTypes from 'prop-types'

class Users extends Component {
    render() {
        //const {users,deleteUsers} = this.props;
        // console.log(users);
        // const users = this.props.users;
        // const deleteusers = this.props.deleteUsers;
        return (
            <UserConsumer>
                {
                    value => {
                        const {users} = value;
                        return (
                            <div>
                                {
                                    users.map(user =>{
                                        return (
                                            <User
                                            key = {user.id}
                                            id = {user.id}
                                            name = {user.name}
                                            department = {user.department}
                                            salary = {user.salary}
                                            // deleteusers = {deleteusers}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
        
    }
}
// Users.propTypes ={
//     users: PropTypes.array.isRequired
//     // deleteUsers: PropTypes.func.isRequired
    
// }
export default Users;