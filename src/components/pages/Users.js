import React, {useState, useEffect} from 'react';
import {Link, NavLink, useHistory} from 'react-router-dom';
import axios from 'axios';


const User = () => {
    let token = localStorage.getItem('token');
    let history = useHistory();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        await axios.get( process.env.REACT_APP_URL + `v1/api/user`)
            .then(data => {
                setUsers(data.data.reverse());
            }).catch(error => {
                history.push('/users')
            })
    };

    const deleteUser = async (id) => {
        console.log(id)
        await axios.delete(`${process.env.REACT_APP_URL}v1/api/${id}`)
        await loadUsers()

    };

    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                                <th scoped="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>
                                    <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip"
                                          title="Show user">
                                    <Link class="btn btn-primary mr-2" to={`/user/show/${user._id}`}>
                                        <i className="fa fa-book"></i>
                                    </Link>
                                    </span>
                                    <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip"
                                          title="Edit user">
                                    <Link class="btn btn-outline-primary mr-2"
                                          to={`/user/edit/${user._id}`}>
                                        <i className="fa fa-book"></i>
                                    </Link>
                                    </span>
                                    {user.username !== 'admin' &&
                                    <span className="d-inline-block" tabIndex="0" data-bs-toggle="tooltip"
                                          title="Delete user">
                                    <NavLink to={'#'} class="btn btn-danger"
                                             onClick={() => deleteUser(user._id)}>
                                        <i className="fa fa-book"></i>
                                    </NavLink>
                                    </span>
                                    }

                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default User;
