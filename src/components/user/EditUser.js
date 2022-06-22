import React, {useEffect, useState} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {
    let history = useHistory();
    const {id} = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        password: "",
    });
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:5000/v1/api/user/${id}`);
        setUser(result.data);
    };

    const onInputChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/v1/api/user/${id}`, user);
        history.push('/users')
    };

    const {name, username, password} = user;
    return (
        <div className="container">
            <Link className="btn btn-primary mt-2 ml-2" to="/users">
                Volver
            </Link>
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Username"
                            name="username"
                            value={username}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>
        </div>
    )
};

export default EditUser;
